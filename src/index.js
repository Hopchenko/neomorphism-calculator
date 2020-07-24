import "normalize.css"

const themeControls = document.getElementsByName("theme")
const body = document.getElementsByTagName("body")[0]

themeControls.forEach((control, index) => {
    control.addEventListener("click", (event) => {
        if (event.target.value === "dark") {
            body.classList.remove("light")
            body.classList.add("dark")
        } else {
            body.classList.remove("dark")
            body.classList.add("light")
        }
    })
})
