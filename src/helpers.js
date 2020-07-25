import { operationButtons, resultInput } from "./controls";

export const normaliseInputForMathJS = (expression) => {
    const divideSymbol = /÷/g;
    const multiplySymbol = /×/g;

    return expression.replace(divideSymbol, "/").replace(multiplySymbol, "*");
};

export const operationButtonValues = Array.from(operationButtons).map(
    (button) => button.value
);

export const inputLastChar = resultInput.value.slice(-1);
