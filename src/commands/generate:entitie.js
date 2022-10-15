module.exports = {
  name: 'generate:entitie',
  description: 'Create new Entitie',
  run: async (toolbox) => {
    const {
      parameters,
      print: { error },
      generateFolders,
      generateController,
      generateRoutes,
      generatePrismaRepository,
      generatePrismaRepositoryTypes,
    } = toolbox

    const name = parameters.first

    if (!name) {
      error('Must be not name Entitie.')
      return
    }

    await generateFolders(name)

    await generateController(name)
    await generateRoutes(name)
    await generatePrismaRepository(name)
    await generatePrismaRepositoryTypes(name)
  },
}
