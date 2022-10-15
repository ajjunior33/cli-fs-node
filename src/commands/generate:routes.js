module.exports = {
  name: 'generate:routes',
  description: 'Generate router',
  run: async (toolbox) => {
    const { parameters, generateRoutes } = toolbox

    const name = parameters.first
    const [path, controller] = name.split('/')
    generateRoutes(controller, path)
  },
}
