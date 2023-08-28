const clientNumber = document.getElementById("tryNumber")
let machineNumber = Math.round(Math.random() * 10)
let xAttempts = 1
clientNumber.focus()

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const tentar = (event) => {
  event.preventDefault()
  if (clientNumber.value <= 10 && clientNumber.value >= 0) {
    if (clientNumber.value != machineNumber) {
      btnTry.style.backgroundColor = "red"
      setTimeout(() => {
        btnTry.style.backgroundColor = "#7879f1"
      }, "200")
      document.getElementById("attempts").textContent = xAttempts++
      clientNumber.value = ""
    } else {
      win()
    }
  }
}

const win = () => {
  clientNumber.value = ""
  toggleScreen()
  btnReset.focus()
}

const reset = () => {
  toggleScreen()
  machineNumber = Math.round(Math.random() * 10)
  xAttempts = 1
  clientNumber.focus()
}

const toggleScreen = () => {
  screen1.classList.toggle("hidden")
  screen2.classList.toggle("hidden")
}

btnTry.addEventListener("click", tentar)
btnReset.addEventListener("click", reset)
