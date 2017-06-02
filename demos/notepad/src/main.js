'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _index = require('./store/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;
_vue2.default.use(_vuex2.default);

new _vue2.default({
  el: '#app',
  store: _index2.default,
  template: '<App/>',
  components: { App: _App2.default }
});
//# sourceMappingURL=main.js.map