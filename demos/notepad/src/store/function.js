'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDate = exports.themeLocal = exports.local = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocalEvent = function LocalEvent(item) {
  this.get = function () {
    return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '';
  };
  this.set = function (obj) {
    localStorage.setItem(item, (0, _stringify2.default)(obj));
  };
  this.clear = function () {
    localStorage.removeItem(item);
  };
};

var local = exports.local = new LocalEvent('szy_notepad');
var themeLocal = exports.themeLocal = new LocalEvent('szy_notepad_theme');
var getDate = exports.getDate = function getDate() {
  var date = new Date();
  var month = parseInt(date.getMonth()) + 1;
  return date.getFullYear() + '-' + month + '-' + date.getDate();
};
//# sourceMappingURL=function.js.map