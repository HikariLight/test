import { Watch } from "./Watch"

class WatchManager {
    private watches: Watch[]

    constructor() {
        this.watches = []
    }

    public addWatch = (watch: Watch) => {
        this.watches.push(watch)
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
                containerDiv.appendChild(newDiv)
            })
        } else {
            console.error(`Parent div not found.`)
        }
    }
}

export { WatchManager }
