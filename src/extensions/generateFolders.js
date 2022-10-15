module.exports = (toolbox) => {
  const {
    parameters,
    print: { success, error },
    filesystem,
    template,
  } = toolbox

  async function generateFolders(name) {
    //Generate Folders
    await filesystem.dir(`src/entities/${name}/dtos`)
    await filesystem.dir(`src/entities/${name}/repositories`)
    await filesystem.dir(`src/entities/${name}/infra`)
    await filesystem.dir(`src/entities/${name}/infra/http`)
    await filesystem.dir(`src/entities/${name}/infra/http/controller`)
    await filesystem.dir(`src/entities/${name}/infra/http/routes`)
    await filesystem.dir(`src/entities/${name}/infra/prisma`)
    await filesystem.dir(`src/entities/${name}/infra/prisma/repositories`)
    await filesystem.dir(`src/entities/${name}/useCases`)
  }

  toolbox.generateFolders = generateFolders
}
