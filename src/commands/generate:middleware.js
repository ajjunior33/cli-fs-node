module.exports = {
  name: 'generate:middleware',
  description: 'Generate middleware',
  run: async (toolbox) => {
    const { parameters, generateMiddleware } = toolbox
    const middleware = parameters.first
    generateMiddleware(middleware)
  },
}
