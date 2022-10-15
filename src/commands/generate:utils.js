module.exports = {
  name: 'generate:utils',
  description: 'Generate Utils',
  run: async (toolbox) => {
    const { parameters, generateUtils } = toolbox
    const utils = parameters.first
    generateUtils(utils)
  },
}
