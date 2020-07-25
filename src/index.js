import "normalize.css"
import {
    themeControls,
    acButton,
    nonActionButtons,
    equalsButton,
} from "./controls"

import {
    onAllClearClick,
    onEqualsClick,
    onNonActionButtonClick,
    onThemeControlsClick,
} from "./eventHandlers"

themeControls.forEach((control) => {
    control.addEventListener("click", onThemeControlsClick)
})

acButton.addEventListener("click", onAllClearClick)

nonActionButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        onNonActionButtonClick(event, button)
    })
})

equalsButton.addEventListener("click", onEqualsClick)
