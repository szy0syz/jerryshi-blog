'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _function = require('../function');

var func = _interopRequireWildcard(_function);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

var _getters = require('./getters');

var _getters2 = _interopRequireDefault(_getters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var state = func.local.get() || {
  event: [],
  count: 0 };exports.default = {
  state: state,
  getters: _getters2.default,
  actions: _actions2.default,
  mutations: _mutations2.default
};
//# sourceMappingURL=index.js.map