(async () => {

  const fs = require('fs/promises')

  try {

    const file = await fs.readFile('./data/data.json', 'utf-8')
    const data = JSON.parse(file)

    let filter = data.filter((element) => {
      return element['TERRITORIO#es'] !== 'España' &&
        element['TERRITORIO#ca'] !== 'Espanya'
    })

    let filterData = filter.reduce((accumulator, elemet) => {
      const territorios = elemet['TERRITORIO#es']
      const fecha = elemet['TIME_PERIOD#es']
      const valor = elemet['OBS_VALUE']
      const medidas = elemet['MEDIDAS_CODE']




      accumulator.push({
        territorios,
        fecha,
        valor,
        medidas
      })
      return accumulator
    }, [])


    await fs.writeFile('./data/precio-luz-json', JSON.stringify(filterData, null, 2))

  } catch (error) {
    console.log(error)
  }
})()