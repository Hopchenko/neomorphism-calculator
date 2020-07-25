import "normalize.css"
import {
    themeControls,
    body,
    acButton,
    resultInput,
    nonActionButtons,
    equalsButton,
} from "./controls"
import { evaluate } from "mathjs"

themeControls.forEach((control) => {
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

acButton.addEventListener("click", (event) => {
    resultInput.value = ""
})

nonActionButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        resultInput.value += event.target.value
        resultInput.focus()
    })
})

equalsButton.addEventListener("click", () => {
    resultInput.value = evaluate(resultInput.value)
})
