module.exports = (toolbox) => {
  const {
    template,
    print: { success },
  } = toolbox
  async function generateController(name, path = undefined) {
    if (path === undefined) {
      path = name
    }
    //Generate Controller
    await template.generate({
      template: `controller.js.ejs`,
      target: `src/entities/${path}/infra/http/controller/${name}Controller.ts`,
      props: { name },
    })
    success(`Controller gerado com sucesso.`)
  }

  toolbox.generateController = generateController
}
