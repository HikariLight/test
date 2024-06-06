import { Watch } from "./Watch"

class WatchView {
    private container: HTMLElement

    constructor(targetDivId: string) {
        this.container = document.getElementById(targetDivId)
    }

    public bindModeToggle = (handler: () => void) => {
        const toggleButton = document.getElementById("toggleDisplayFormat")
        if (toggleButton) {
            toggleButton.addEventListener("click", (event) => {
                event.preventDefault()
                handler()
            })
        }
    }

    public bindAddWatch = (handler: (timeZone: string) => void) => {
        const addWatchButton = document.getElementById("addWatchButton")
        if (addWatchButton) {
            addWatchButton.addEventListener("click", (event) => {
                event.preventDefault()
                const timeZonesDropdown = document.getElementById(
                    "timezone",
                ) as HTMLSelectElement
                const timeZone: string = timeZonesDropdown.value
                handler(timeZone)
            })
        }
    }

    private watchToHTML(watch: Watch, index: number): string {
        return `
            <div class="${watch.getLightStatus() ? "" : "dark"}">
                <div id="watch-${index}" class="dark:bg-slate-800 bg-white-800 mx-auto border border-purple-800 rounded-xl p-4 w-full sm:w-1/2 grid place-items-center shadow-md">
                    <p class="text-xl text-purple-600">${watch.getCurrentTime()}</p>
                    <p class="text-purple-500 my-1">(${watch.getTimeZone()})</p>
                    <div class="flex space-x-2">
                        <button id="mode" class="p-2 bg-purple-800 text-white rounded-md">Mode</button>
                        <button id="increase" class="p-2 bg-purple-800 text-white rounded-md">Increase</button>
                        <button id="light" class="p-2 bg-purple-800 text-white rounded-md">Light</button>
                        <button id="reset" class="p-2 bg-purple-800 text-white rounded-md">Reset</button>
                    </div>
                </div>
            </div>
        `
    }

    public renderWatches(
        watches: Watch[],
        handleModeClick: (id: number) => void,
        handleLightClick: (id: number) => void,
        handleIncreaseClick: (id: number) => void,
        handleResetClick: (id: number) => void,
    ): void {
        this.container.innerHTML = ""
        watches.map((watch, index) => {
            const newDiv = document.createElement("div")
            newDiv.innerHTML = this.watchToHTML(watch, index)

            const modeButton = newDiv.querySelector("button#mode")
            modeButton.addEventListener("click", () => {
                handleModeClick(index)
            })

            const lightbutton = newDiv.querySelector("button#light")
            lightbutton.addEventListener("click", () => {
                handleLightClick(index)
            })

            const increaseButton = newDiv.querySelector("button#increase")
            increaseButton.addEventListener("click", () => {
                handleIncreaseClick(index)
            })

            const resetButton = newDiv.querySelector("button#reset")
            resetButton.addEventListener("click", () => {
                handleResetClick(index)
            })

            this.container.appendChild(newDiv)
        })
    }
}

export { WatchView }
