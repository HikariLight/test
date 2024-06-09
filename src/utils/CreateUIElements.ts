const createButton = (
    label: string,
    onClick: () => void,
): HTMLButtonElement => {
    const button = document.createElement("button")
    button.textContent = label
    button.addEventListener("click", onClick)
    return button
}

const createLabel = (
    textContent: string,
    className?: string,
    id?: string,
): HTMLElement => {
    const label = document.createElement("label")
    if (className) label.className = className
    if (id) label.id = id
    label.textContent = textContent
    return label
}

export { createButton, createLabel }
