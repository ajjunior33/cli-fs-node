module.exports = {
  name: 'generate:exception',
  description: 'Generate exception',
  run: async (toolbox) => {
    const { parameters, generateException } = toolbox
    const exception = parameters.first
    generateException(exception)
  },
}
