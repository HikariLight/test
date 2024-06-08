import { Watch } from "./Watch"

class WatchView {
    private container: HTMLElement
    private watchesContainer: HTMLElement
    private addButton: HTMLButtonElement
    private toggleButton: HTMLButtonElement
    private timeZone: HTMLInputElement

    constructor(targetDivId: string) {
        this.container = document.getElementById(targetDivId)

        this.watchesContainer = document.createElement("div")

        this.addButton = document.createElement("button")
        this.addButton.textContent = "Add Watch"
        this.timeZone = document.createElement("input")

        this.toggleButton = document.createElement("button")
        this.toggleButton.textContent = "Toggle Display Format"

        this.timeZone.placeholder = "Timezone (+/- hh:mm)"

        this.container.appendChild(this.addButton)
        this.container.appendChild(this.timeZone)
        this.container.appendChild(this.toggleButton)
    }

    public bindModeToggle = (handler: () => void) => {
        this.toggleButton.addEventListener("click", () => {
            handler()
        })
    }

    public bindAddWatch = (handler: (timeZone: string) => void) => {
        this.addButton.addEventListener("click", () => {
            const timeZone: string = this.timeZone.value
            handler(timeZone)
        })
    }

    public render(
        watches: Watch[],
        handleModeClick: (id: number) => void,
        handleIncreaseClick: (id: number) => void,
        handleLightClick: (id: number) => void,
        handleResetClick: (id: number) => void,
    ): void {
        this.watchesContainer.innerHTML = ""

        watches.forEach((watch, index) => {
            const watchContainer = document.createElement("div")
            watchContainer.className = "watchContainer"
            watch.getLightStatus()
                ? (watchContainer.className += " light-bg")
                : (watchContainer.className += " dark-bg")

            const time = document.createElement("label")
            time.className = "timeLabel"
            time.textContent = watch.getCurrentTime()
            watchContainer.appendChild(time)

            const timeZoneLabel = document.createElement("label")
            timeZoneLabel.className = "timeZoneLabel"
            timeZoneLabel.textContent = `(Time zone: ${watch.getTimeZone()})`
            watchContainer.appendChild(timeZoneLabel)

            const modeButton = document.createElement("button")
            modeButton.textContent = "Mode"
            modeButton.addEventListener("click", () => {
                handleModeClick(index)
            })
            watchContainer.appendChild(modeButton)

            const increaseButton = document.createElement("button")
            increaseButton.textContent = "Increase"
            increaseButton.addEventListener("click", () => {
                handleIncreaseClick(index)
            })
            watchContainer.appendChild(increaseButton)

            const lightButton = document.createElement("button")
            lightButton.textContent = "Light"
            lightButton.addEventListener("click", () => {
                handleLightClick(index)
            })
            watchContainer.appendChild(lightButton)

            const resetButton = document.createElement("button")
            resetButton.textContent = "Reset"
            resetButton.addEventListener("click", () => {
                handleResetClick(index)
            })
            watchContainer.appendChild(resetButton)

            this.watchesContainer.appendChild(watchContainer)
        })
        this.container.appendChild(this.watchesContainer)
    }
}

export { WatchView }
