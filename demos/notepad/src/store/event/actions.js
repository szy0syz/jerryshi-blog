'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  addevent: function addevent(_ref, payload) {
    var commit = _ref.commit;
    return commit('ADDEVENT', { items: payload });
  },
  eventdone: function eventdone(_ref2, payload) {
    var commit = _ref2.commit;
    return commit('EVENTDONE', { id: payload });
  },
  eventtodo: function eventtodo(_ref3, payload) {
    var commit = _ref3.commit;
    return commit('EVENTTODO', { id: payload });
  },
  eventcancel: function eventcancel(_ref4, payload) {
    var commit = _ref4.commit;
    return commit('EVENTCANCEL', { id: payload });
  },
  clearevent: function clearevent(_ref5) {
    var commit = _ref5.commit;
    return commit('CLEAREVENT');
  },
  delevent: function delevent(_ref6, payload) {
    var commit = _ref6.commit;
    return commit('DELEVENT', payload);
  },
  editevent: function editevent(_ref7, payload) {
    var commit = _ref7.commit;
    return commit('EDITEVENT', payload);
  }
};
//# sourceMappingURL=actions.js.map