"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReferenceCountingCache;
var _lodash = require("lodash");
function createReferenceCountingCache() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$cleanupDelay = _ref.cleanupDelay,
    cleanupDelay = _ref$cleanupDelay === void 0 ? 2000 : _ref$cleanupDelay;
  var items = {};
  var cleanup = (0, _lodash.debounce)(() => {
    (0, _lodash.each)(items, (item, key) => {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'refCount' does not exist on type 'never'... Remove this comment to see the full error message
      if (item.refCount <= 0) {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        delete items[key];
      }
    });
  }, cleanupDelay);
  function get(key, getter) {
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    if (!items[key]) {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      items[key] = {
        value: getter(),
        refCount: 0
      };
    }
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    var item = items[key];
    item.refCount += 1;
    return item.value;
  }
  function release(key) {
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    if (items[key]) {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      var item = items[key];
      if (item.refCount > 0) {
        item.refCount -= 1;
        if (item.refCount <= 0) {
          cleanup();
        }
      }
    }
  }
  return {
    get,
    release
  };
}
//# sourceMappingURL=referenceCountingCache.js.map