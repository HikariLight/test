const createButton = (
    label: string,
    onClick: () => void,
): HTMLButtonElement => {
    const button = document.createElement("button")
    button.textContent = label
    button.addEventListener("click", onClick)
    return button
}

export { createButton }
