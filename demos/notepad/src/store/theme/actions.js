'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  switch_theme: function switch_theme(_ref, param) {
    var commit = _ref.commit;
    return commit('SWITCHTHEME', { theme: param });
  }
};
//# sourceMappingURL=actions.js.map