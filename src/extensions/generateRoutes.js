module.exports = (toolbox) => {
  const {
    template,
    print: { success },
  } = toolbox
  async function generateRoutes(name, path = undefined) {
    if (path === undefined) {
      path = name
    }
    //Generate Routes
    await template.generate({
      template: `routes.js.ejs`,
      target: `src/entities/${path}/infra/http/routes/${name}.routes.ts`,
      props: { name },
    })
    success(`Rota gerado gerada com sucesso`)
  }

  toolbox.generateRoutes = generateRoutes
}
