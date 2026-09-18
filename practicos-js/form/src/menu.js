export default (() => {
  const formulario = document.querySelector('.myForm');
  const notError = document.querySelector('.noti-left');
  const notSucces = document.querySelector('.noti-right');



  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    alert("¡El formulario se ha enviado correctamente!");
  });
})()