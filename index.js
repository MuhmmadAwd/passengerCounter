let countEl = null;
let prevCountEL = null;
let incrementBtn = null;
let saveBtn = null;

let count = 0;

function init() {
    countEl = document.querySelector("h2");
    prevCountEL = document.querySelector("span")
    incrementBtn = document.querySelector(".btn-red")
    saveBtn = document.querySelector(".btn-green")

    incrementBtn.addEventListener("click", incrementPassenger)

    saveBtn.addEventListener("click", savePassengerCount)
}
const incrementPassenger = () => {
    countEl.textContent = count += 1
}
const savePassengerCount = () => {
    prevCountEL.textContent = count
    countEl.textContent = 0;
    count = 0
}
document.addEventListener("DOMContentLoaded", init());