module.exports = (toolbox) => {
  const {
    template,
    print: { success },
  } = toolbox
  async function generateUseCase(name, path = undefined) {
    if (path === undefined) {
      path = name
    }
    //Generate Routes
    await template.generate({
      template: `useCase.js.ejs`,
      target: `src/entities/${path}/useCases/${name}UseCase.ts`,
      props: { name },
    })
    success(`UseCase gerado gerada com sucesso`)
  }

  toolbox.generateUseCase = generateUseCase
}
