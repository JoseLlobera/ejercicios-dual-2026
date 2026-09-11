export default (() => {
  const formulario = document.querySelector('.myForm');

  // Escucha el evento de envío (submit)
  formulario.addEventListener('submit', (evento) => {
    // Evita que la página se recargue automáticamente
    evento.preventDefault();

    // Muestra la alerta en el navegador
    alert("¡El formulario se ha enviado correctamente!");
  });
})()