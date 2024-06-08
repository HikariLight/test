import { Observer } from "./Observer"
import { Watch } from "./Watch"
import { WatchController } from "./WatchController"
import { createButton } from "../utils"

class WatchView implements Observer {
    private controller: WatchController
    private watches: Watch[]

    private container: HTMLElement
    private watchesContainer: HTMLElement
    private addButton: HTMLButtonElement
    private toggleButton: HTMLButtonElement
    private timeZone: HTMLInputElement

    constructor(targetDivId: string, contoller: WatchController) {
        this.container = document.getElementById(targetDivId)
        if (!this.container) {
            throw new Error(`Element with id ${targetDivId} not found.`)
        }

        this.controller = contoller
        this.watches = []

        this.watchesContainer = document.createElement("div")

        this.timeZone = document.createElement("input")
        this.timeZone.placeholder = "Timezone (+/- hh:mm)"

        this.addButton = createButton("Create Watch", () => {
            if (!this.validateTimezone(this.timeZone.value))
                return alert("Not a valid timezone format")
            this.controller.createWatch(this.timeZone.value)
        })

        this.toggleButton = createButton("Toggle Display Format", () =>
            this.controller.toggleDisplayFormat(),
        )

        this.container.appendChild(this.addButton)
        this.container.appendChild(this.timeZone)
        this.container.appendChild(this.toggleButton)
    }

    public update(watchList: Watch[]) {
        this.watches = watchList
        this.render()
    }

    public render(): void {
        this.watchesContainer.innerHTML = ""

        this.watches.forEach((watch, index) => {
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

            const modeButton = createButton("Mode", () =>
                this.controller.toggleWatchMode(index),
            )
            watchContainer.appendChild(modeButton)

            const increaseButton = createButton("Increase", () =>
                this.controller.increaseWatchTime(index),
            )
            watchContainer.appendChild(increaseButton)

            const lightButton = createButton("Light", () =>
                this.controller.toggleWatchLight(index),
            )
            watchContainer.appendChild(lightButton)

            const resetButton = createButton("Reset", () =>
                this.controller.resetWatch(index),
            )
            watchContainer.appendChild(resetButton)

            this.watchesContainer.appendChild(watchContainer)
        })

        this.container.appendChild(this.watchesContainer)
    }

    private validateTimezone = (timeZone: string): boolean => {
        // Validating whether the input timezone is conformant to the Intl.DateTimeFormat() formats
        const regex = /^([+-])(\d{2}(:\d{2})?)$/
        return regex.test(timeZone)
    }
}

export { WatchView }
