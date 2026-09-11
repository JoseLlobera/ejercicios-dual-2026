export default (() => {
  const middleWidthScreen = window.innerWidth / 2;
  const eye = document.querySelector('.eye')

  const iris = document.querySelector('.iris')
  const pupil = document.querySelector('.pupil')


  document.addEventListener('mousemove', (event) => {
    // Centro del ojo
    const eyeRect = eye.getBoundingClientRect()

    const eyeCenterX = eyeRect.left + eyeRect.width / 2
    const eyeCenterY = eyeRect.top + eyeRect.height / 2

    // Vector desde el centro del ojo hasta el ratón
    const dx = event.clientX - eyeCenterX
    const dy = event.clientY - eyeCenterY

    // Distancia entre el ratón y el centro del ojo
    const distance = Math.sqrt(dx ** 2 + dy ** 2)

    // Evitamos dividir entre 0
    if (distance === 0) return

    // Vector normalizado
    const directionX = dx / distance
    const directionY = dy / distance

    /*
      OJO: 300px
      IRIS: 200px

      El iris puede moverse como máximo:

      (300 - 200) / 2 = 50px
    */
    const maxIrisMovement =
      (eyeRect.width - iris.offsetWidth) / 2

    /*
      IRIS: 200px
      PUPILA: 100px

      La pupila podría moverse máximo:

      (200 - 100) / 2 = 50px

      Uso 40px para dejar un pequeño margen.
    */
    const maxPupilMovement = 40

    // Movimiento iris
    const irisX = directionX * maxIrisMovement
    const irisY = directionY * maxIrisMovement

    // Movimiento pupila dentro del iris
    const pupilX = directionX * maxPupilMovement
    const pupilY = directionY * maxPupilMovement

    iris.style.transform =
      `translate(${irisX}px, ${irisY}px)`

    pupil.style.transform =
      `translate(${pupilX}px, ${pupilY}px)`
  });
})()