import { Watch } from "./Watch"

class WatchManager {
    private watches: Watch[]

    constructor() {
        this.watches = []
    }

    public createWatch = (timeZone: string) => {
        try {
            this.watches.push(new Watch(timeZone))
        } catch (error) {
            console.error(error)
        }
    }

    public addWatch = (watch: Watch) => {
        this.watches.push(watch)
    }

    public toggleDisplayFormat = () => {
        this.watches.forEach((watch) => {
            watch.toggleTimeFormat()
        })
    }

    public renderWatches = (targetDiv: string) => {
        const containerDiv = document.getElementById(targetDiv)
        if (containerDiv) {
            containerDiv.innerHTML = ""
            this.watches.forEach((watch) => {
                const newDiv = document.createElement("div")
                newDiv.id = newDiv.innerHTML = watch.toHTML()

                newDiv
                    .querySelector("button#mode")
                    .addEventListener("click", () => {
                        watch.modeButton()
                        this.renderWatches("container")
                    })

                newDiv
                    .querySelector("button#increase")
                    .addEventListener("click", () => {
                        watch.increaseButton()
                        this.renderWatches("container")
                    })

                newDiv
                    .querySelector("button#light")
                    .addEventListener("click", () => {
                        watch.lightButton()
                        this.renderWatches("container")
                    })

                newDiv
                    .querySelector("button#reset")
                    .addEventListener("click", () => {
                        watch.resetButton()
                        this.renderWatches("container")
                    })

                containerDiv.appendChild(newDiv)
            })
        } else {
            throw new Error("Target div not found.")
        }
    }
}

export { WatchManager }
