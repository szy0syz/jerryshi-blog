"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  getEventList: function getEventList(states) {
    return states.event;
  },
  getToDo: function getToDo(states) {
    return states.event.filter(function (d) {
      return d.type === 1;
    });
  },
  getDone: function getDone(states) {
    return states.event.filter(function (d) {
      return d.type === 2;
    });
  },
  getCancel: function getCancel(states) {
    return states.event.filter(function (d) {
      return d.type === 3;
    });
  }
};
//# sourceMappingURL=getters.js.map