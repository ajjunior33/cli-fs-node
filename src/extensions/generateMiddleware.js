module.exports = (toolbox) => {
  const {
    template,
    print: { success },
  } = toolbox
  async function generateMiddleware(name, path = undefined) {
    if (path === undefined) {
      path = name
    }
    //Generate Routes
    await template.generate({
      template: `middleware.js.ejs`,
      target: `src/middlewares/${name}/index.ts`,
      props: { name },
    })
    success(`Middleware gerado gerada com sucesso`)
  }

  toolbox.generateMiddleware = generateMiddleware
}
