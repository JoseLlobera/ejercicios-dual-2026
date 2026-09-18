(async () => {

  const fs = require('fs/promises')

  try {

    const file = await fs.readFile('./data/afiliados-por-municio-sexo.json', 'utf-8')
    let data = JSON.parse(file)
    data = data.series[0].data

    let filter = data.filter((element) => {
      return element['Sexo'] !== 'TOTAL' &&
        element['Isla y municipio de residencia'] !== 'Sin descripción' &&
        element['Isla y municipio de residencia'] !== 'MALLORCA' &&
        element['Isla y municipio de residencia'] !== 'ILLES BALEARS' &&
        element['Isla y municipio de residencia'] !== 'MENORCA' &&
        element['Isla y municipio de residencia'] !== 'EIVISSA' &&
        element['Isla y municipio de residencia'] !== 'FORMENTERA'
    })

    let filterData = filter.reduce((acumulator, element) => {
      const cantidad = element['valor'].replaceAll('.', '')
      const sexo = element['Sexo'] === "Hombres" ? "M" : "F"
      const periodo = element['Periodo']
      const [codigoPostal, ...nombreMunicipio] = element["Isla y municipio de residencia"].split(' ')
      let municipio = nombreMunicipio.join(" ")
      if (municipio.includes("(")) {
        let articulo = municipio.split(" ").pop();

        console.log(articulo);
      }



      acumulator.push({
        cantidad,
        sexo,
        periodo,
        codigoPostal,
        municipio
      })
      return acumulator
    }, [])







    await fs.writeFile('./data/normalizacion-afiliados-por-municio-sexo.json', JSON.stringify(filterData, null, 2))

  } catch (error) {
    console.log(error)
  }
})()