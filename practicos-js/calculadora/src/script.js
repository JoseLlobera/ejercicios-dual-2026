export default (() => {
  const inputValue = document.querySelector("#result")
  const calculator = document.querySelector(".calc-container")

  calculator.addEventListener('click', event => {
    if (event.target.closest('.number')) {
      const number = event.target.closest('.number')

      if (inputValue.value == 0 && number.textContent != 0) {
        inputValue.value = number.textContent
      } else {
        inputValue.value += number.textContent
      }
    }

    if (event.target.closest('.operations')) {
      const operator = event.target.closest('.operations')
      inputValue.value += operator.textContent
    }

    if (event.target.closest('.equal')) {
      inputValue.value = eval(inputValue.value)
    }
  })
})();