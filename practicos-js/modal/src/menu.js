export default (() => {
    const openButton = document.querySelector(".open")
    const modal = document.querySelector(".window")
    const closeButton = document.querySelector(".close")

    function openModal() {
        modal.hidden = false;
    }

    function closeModal() {
        modal.hidden = true;
    }

    openButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);

})()