export default (() => {
  const menuButton = document.querySelector(".cbox-robot")
  const menuTotal = document.querySelector(".asidebar")
  const menuInside = document.querySelector(".insidebar")

  menuButton.addEventListener("click", () => {
    menuTotal.classList.toggle("inactive");
    menuInside.classList.toggle("active");
  })

  menuButton.addEventListener("click", () => {
    menuTotal.classList.toggle("active");
    menuInside.classList.toggle("inactive");
  })
})();