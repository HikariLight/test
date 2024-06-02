import { Watch } from "./Watch"

class WatchManager {
    private watches: Watch[]

    constructor() {
        this.watches = []
    }

    public createWatch = (timeZone: string) => {
        this.watches.push(new Watch(timeZone))
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
                    })

                newDiv
                    .querySelector("button#increase")
                    .addEventListener("click", () => {
                        watch.increaseButton()
                    })

                newDiv
                    .querySelector("button#light")
                    .addEventListener("click", () => {
                        watch.lightButton()
                    })

                newDiv
                    .querySelector("button#reset")
                    .addEventListener("click", () => {
                        watch.resetButton()
                    })

                containerDiv.appendChild(newDiv)
            })
        } else {
            console.error(`Parent div not found.`)
        }
    }
}

export { WatchManager }
