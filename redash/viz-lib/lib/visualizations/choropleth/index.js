"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getOptions = _interopRequireDefault(require("./getOptions"));
var _Renderer = _interopRequireDefault(require("./Renderer"));
var _Editor = _interopRequireDefault(require("./Editor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  type: "CHOROPLETH",
  name: "Map (Choropleth)",
  getOptions: _getOptions.default,
  Renderer: _Renderer.default,
  Editor: _Editor.default,
  defaultColumns: 3,
  defaultRows: 8,
  minColumns: 2
};
exports.default = _default;
//# sourceMappingURL=index.js.map