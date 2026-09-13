export default (() => {
    const plusButton = document.querySelector(".plus-button");
    const lessButton = document.querySelector(".less-button");
    const counter = document.querySelector(".result");


    let value = 0;

    const changeValue = amount => {
        value += amount;

        if (counter) {
            counter.textContent = value;
        }

        console.log(value);
    };

    plusButton?.addEventListener("click", () => changeValue(1));
    lessButton?.addEventListener("click", () => changeValue(-1));
})();