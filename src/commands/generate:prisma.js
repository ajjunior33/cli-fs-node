module.exports = {
  name: 'generate:prisma',
  description: 'Generate prisma entitie/repository',
  run: async (toolbox) => {
    const {
      parameters,
      generatePrismaRepository,
      generatePrismaRepositoryTypes,
    } = toolbox
    const name = parameters.first
    const [path, controller] = name.split('/')
    generatePrismaRepository(controller, path)
    generatePrismaRepositoryTypes(controller, path)
  },
}
