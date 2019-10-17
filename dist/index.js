"use strict";

var _jestEnvironmentNode = _interopRequireDefault(require("jest-environment-node"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class P2pEnvironment extends _jestEnvironmentNode.default {
  constructor(config, context) {
    Object.assign(config.globals, {
      Uint8Array: Uint8Array,
      ArrayBuffer: ArrayBuffer
    });
    super(config, context);
  }

}

module.exports = P2pEnvironment;