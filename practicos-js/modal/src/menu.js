export default (() => {
    const openButton = document.querySelector(".open")
    const modal = document.querySelector(".window")
    const closeButton = document.querySelector(".close")

    openButton.addEventListener("click", () => {
        modal.hidden = false;
    })

    closeButton.addEventListener("click", () => {
        modal.hidden = true;
    })

})()