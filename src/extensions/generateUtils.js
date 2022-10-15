module.exports = (toolbox) => {
  const {
    template,
    print: { success },
  } = toolbox
  async function generateUtils(name, path = undefined) {
    if (path === undefined) {
      path = name
    }
    //Generate Routes
    await template.generate({
      template: `utils.js.ejs`,
      target: `src/shared/utils/${name}Utils.ts`,
      props: { name },
    })
    success(`Exception gerado gerada com sucesso`)
  }

  toolbox.generateUtils = generateUtils
}
