module.exports = {
  name: 'generate:controller',
  description: 'Generate controller entitie/controller',
  run: async (toolbox) => {
    const { parameters, generateController } = toolbox
    const name = parameters.first
    const [path, controller] = name.split('/')
    generateController(controller, path)
  },
}
