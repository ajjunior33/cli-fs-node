module.exports = (toolbox) => {
  const {
    template,
    print: { success },
  } = toolbox
  async function generatePrismaRepositoryTypes(name, path = undefined) {
    if (path === undefined) {
      path = name
    }
    //Generate Repository Prisma
    await template.generate({
      template: `repositoriesPrismaTypes.js.ejs`,
      target: `src/entities/${path}/repositories/I${name}Repository.d.ts`,
      props: { name },
    })
    success(`Tipagem do repositório gerada com sucesso`)
  }

  toolbox.generatePrismaRepositoryTypes = generatePrismaRepositoryTypes
}
