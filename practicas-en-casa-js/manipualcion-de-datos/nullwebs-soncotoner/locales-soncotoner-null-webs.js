(async () => {

  const fs = require('fs/promises')

  try {

    const file = await fs.readFile('./data/locales-soncotoner-null-webs.json', 'utf-8')
    let data = JSON.parse(file)

    let filter = data.filter((element) => {
      return element['email'] !== null &&
        element['telefono'] !== null
    })

    let filterData = filter.reduce((acumulator, element) => {
      const local = element["nombre"];
      const tipo = element["categoria"];
      const movil = element["telefono"];
      const estado = element["estado_web"];

      acumulator.push({
        local,
        tipo,
        movil,
        estado
      });

      return acumulator;
    }, []);







    await fs.writeFile('./data/nullwebs-soncotoner.json', JSON.stringify(filterData, null, 2))

  } catch (error) {
    console.log(error)
  }
})()