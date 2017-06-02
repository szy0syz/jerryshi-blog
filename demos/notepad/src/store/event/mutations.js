'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _type$ADDEVENT$type$E;

var _mutations_types = require('./mutations_types');

var type = _interopRequireWildcard(_mutations_types);

var _function = require('../function');

var func = _interopRequireWildcard(_function);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_type$ADDEVENT$type$E = {}, (0, _defineProperty3.default)(_type$ADDEVENT$type$E, type.ADDEVENT, function (states, payload) {
  states.count++;
  payload.items.id = states.count;
  states.event.unshift(payload.items);
  func.local.set(states);
}), (0, _defineProperty3.default)(_type$ADDEVENT$type$E, type.EVENTTODO, function (states, payload) {
  for (var i = 0; i < states.event.length; i++) {
    if (states.event[i].id === payload.id) {
      states.event[i].type = 1;
      states.event[i].time = func.getDate();
      var item = states.event[i];
      states.event.splice(i, 1);
      break;
    }
  }
  states.event.unshift(item);
  func.local.set(states);
}), (0, _defineProperty3.default)(_type$ADDEVENT$type$E, type.EVENTDONE, function (states, payload) {
  for (var i = 0; i < states.event.length; i++) {
    if (states.event[i].id === payload.id) {
      states.event[i].type = 2;
      states.event[i].time = func.getDate();
      var item = states.event[i];
      states.event.splice(i, 1);
      break;
    }
  }
  states.event.unshift(item);
  func.local.set(states);
}), (0, _defineProperty3.default)(_type$ADDEVENT$type$E, type.EVENTCANCEL, function (states, payload) {
  for (var i = 0; i < states.event.length; i++) {
    if (states.event[i].id === payload.id) {
      states.event[i].type = 3;
      states.event[i].time = func.getDate();
      var item = states.event[i];
      states.event.splice(i, 1);
      break;
    }
  }
  states.event.unshift(item);
  func.local.set(states);
}), (0, _defineProperty3.default)(_type$ADDEVENT$type$E, type.CLEAREVENT, function (states) {
  states.event = [];
  func.local.clear();
}), (0, _defineProperty3.default)(_type$ADDEVENT$type$E, type.DELEVENT, function (states, payload) {
  console.dir(payload);
  if (states.event[payload.index].id === payload.id) {
    states.event.splice(payload.index, 1);
  } else {
    states.event.filter(function (d, i) {
      if (d.id === payload.id) {
        states.event.splice(i, 1);
      }
    });
  }
  func.local.set(states);
}), (0, _defineProperty3.default)(_type$ADDEVENT$type$E, type.EDITEVENT, function (states, payload) {
  if (states.event[payload.index].id === payload.id) {
    states.event[payload.index].content = payload.content;
  } else {
    states.evnet.filter(function (d) {
      if (d.id) {
        d.content = payload.content;
      }
    });
  }
  func.local.set(states);
}), _type$ADDEVENT$type$E);
//# sourceMappingURL=mutations.js.map