module.exports = (toolbox) => {
  const {
    template,
    print: { success },
  } = toolbox
  async function generateException(name, path = undefined) {
    if (path === undefined) {
      path = name
    }
    //Generate Routes
    await template.generate({
      template: `middleware.js.ejs`,
      target: `src/shared/erros/${name}Exception.ts`,
      props: { name },
    })
    success(`Exception gerado gerada com sucesso`)
  }

  toolbox.generateException = generateException
}
