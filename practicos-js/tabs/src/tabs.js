export default (() => {
  const tabButtons = document.querySelector(".tabs");

  tabButtons.addEventListener("click", event => {
    if (event.target.closest('.tab')) {
      const tab = event.target.closest('.tab')

      document.querySelector('.tab.active').classList.remove('active')
      tab.classList.add('active')

      document.querySelector('.tab-content.active').classList.remove('active')
      document.querySelector(`.tab-content[data-tab="${tab.dataset.tab}"]`).classList.add('active')
    }
  });
})();