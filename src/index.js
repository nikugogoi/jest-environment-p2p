import NodeEnvironment from 'jest-environment-node'

class P2pEnvironment extends NodeEnvironment {
  constructor (config, context) {
    Object.assign(
      config.globals,
      {
        Uint8Array: Uint8Array,
        ArrayBuffer: ArrayBuffer
      }
    )

    super(config, context)
  }
}

module.exports = P2pEnvironment
