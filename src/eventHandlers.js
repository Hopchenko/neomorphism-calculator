import { evaluate } from "mathjs";
import { body, resultInput } from "./controls";
import {
    inputLastChar,
    normaliseInputForMathJS,
    operationButtonValues,
} from "./helpers";

export const onThemeControlsClick = (event) => {
    if (event.target.value === "dark") {
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
    }
};

export const onAllClearClick = () => {
    resultInput.value = "";
};

export const onEqualsClick = () => {
    resultInput.value = evaluate(normaliseInputForMathJS(resultInput.value));
};

export const onNonActionButtonClick = (event, button) => {
    if (
        button.name === "operation-button" &&
        operationButtonValues.includes(inputLastChar)
    ) {
        return;
    }
    resultInput.value += event.target.value;
    resultInput.focus();
};
