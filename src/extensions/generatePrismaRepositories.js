module.exports = (toolbox) => {
  const {
    template,
    print: { success },
  } = toolbox
  async function generatePrismaRepository(name, path = undefined) {
    //Generate Prisma repositories

    if (path === undefined) {
      path = name
    }

    await template.generate({
      template: `repositoriesPrisma.js.ejs`,
      target: `src/entities/${path}/infra/prisma/repositories/${name}Repository.ts`,
      props: { name },
    })
    success(`Repository gerado com sucesso`)
  }

  toolbox.generatePrismaRepository = generatePrismaRepository
}
