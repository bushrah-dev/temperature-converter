const celsiusEl = document.querySelector("#celsius")
const degreeEl = document.querySelector("#degree")
const convertBtn = document.querySelector("#convert-btn")
const tempEl = document.querySelector("#temp-type")


window.addEventListener("load", () => {
    degreeEl.value = ""
    celsiusEl.innerHTML = ""
})




convertBtn.addEventListener("click", (e) => {
    e.preventDefault()
    toCelsius()
})

function toCelsius() {
    let inputVal = degreeEl.value

    if(tempEl.value === "fahrenheit") {
        const fahToCel = (inputVal -32) * (5/9)
        celsiusEl.innerHTML = `${fahToCel.toFixed(1)} &deg;c`
    } else if(tempEl.value === "kelvin"){
        const kelToCel = inputVal - 273.15
        celsiusEl.innerHTML = `${kelToCel.toFixed(1)} &deg;c`
    } else if(tempEl.value === "newton"){
        const newToCel = inputVal * (100/ 33)
        celsiusEl.innerHTML = `${newToCel.toFixed(1)} &deg;c`
    }
}