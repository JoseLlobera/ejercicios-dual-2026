export default (() => {
  const tabButtons = document.querySelectorAll(".tablinks");
  const tabContents = document.querySelectorAll(".tabcontent");

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      // 1. Desactiva todos los botones y su contenido
      tabButtons.forEach((button) => {
        button.classList.remove("active");
      });
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      // 2. Activa aquel que se ha disparado
      tabButtons[index].classList.add("active");
      tabContents[index].classList.add("active");
    });
  });
})();