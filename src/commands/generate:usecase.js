module.exports = {
  name: 'generate:usecase',
  description: 'Generate useCase',
  run: async (toolbox) => {
    const { parameters, generateUseCase } = toolbox
    const name = parameters.first
    const [path, usecase] = name.split('/')
    generateUseCase(usecase, path)
  },
}
