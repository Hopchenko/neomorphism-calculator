export const themeControls = document.getElementsByName("theme")
export const body = document.getElementsByTagName("body")[0]

// Numbers
export const numberButtons = document.getElementsByName("number-button")
export const operationButtons = document.getElementsByName("operation-button")

// Operations

export const acButton = document.getElementById("all-cancel")
export const changeSignButton = document.getElementById("change-sign")
export const equalsButton = document.getElementById("equals")
export const resultInput = document.getElementById("result")
export const nonActionButtons = [...numberButtons, ...operationButtons]
