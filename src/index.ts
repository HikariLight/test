import "./styles/index.css"
import { Watch } from "./ts/Watch"
import { WatchManager } from "./ts/WatchManager"

const watch = new Watch("Europe/Paris")
const watchManager = new WatchManager()
watchManager.addWatch(watch)

// Rendering
try {
    watchManager.renderWatches("container") // Rendering the first view
    const intervalId = setInterval(
        () => watchManager.renderWatches("container"),
        1000,
    ) // Re-render every 1s
} catch (error) {
    console.error(error)
}

// Adding new watches
const addWatchButton = document.querySelector("button#addWatch")
if (addWatchButton) {
    addWatchButton.addEventListener("click", () => {
        const timeZonesDropdown = document.getElementById(
            "timezone",
        ) as HTMLSelectElement
        const timeZone = timeZonesDropdown.value
        watchManager.createWatch(timeZone)

        try {
            watchManager.renderWatches("container")
        } catch (error) {
            console.error(error)
        }
    })
} else {
    throw new Error("Add watch button not found")
}

// Changing display format (24H/12H)
const toggleDisplayButton = document.querySelector("button#toggleDisplayFormat")
if (toggleDisplayButton) {
    toggleDisplayButton.addEventListener("click", () => {
        watchManager.toggleDisplayFormat()

        try {
            watchManager.renderWatches("container")
        } catch (error) {
            console.error(error)
        }
    })
} else {
    throw new Error("Toggle display format button not found")
}
