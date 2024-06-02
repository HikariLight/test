import "./styles/index.css"
import { Watch } from "./ts/Watch"
import { WatchManager } from "./ts/WatchManager"

const watch = new Watch("Europe/Paris")
const watchManager = new WatchManager()
watchManager.addWatch(watch)

// Rendering
watchManager.renderWatches("container") // Rendering the first view
const intervalId = setInterval(
    () => watchManager.renderWatches("container"),
    1000,
) // Re-render every 1s

// Adding new watches
const addWatchButton = document.querySelector("button#addWatch")
addWatchButton.addEventListener("click", () => {
    const timeZonesDropdown = document.getElementById(
        "timezone",
    ) as HTMLSelectElement
    const timeZone = timeZonesDropdown.value
    watchManager.createWatch(timeZone)
    watchManager.renderWatches("container")
})

// Changing display format (24H/12H)
const settingsApplyButton = document.querySelector("button#toggleDisplayFormat")
settingsApplyButton.addEventListener("click", () => {
    watchManager.toggleDisplayFormat()
    watchManager.renderWatches("container")
})
