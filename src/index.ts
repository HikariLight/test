import "./styles/index.css"
import { Watch } from "./ts/Watch"
import { WatchManager } from "./ts/WatchManager"

const firstWatch = new Watch()
const secondWatch = new Watch()
const watchManager = new WatchManager()

watchManager.addWatch(firstWatch)
watchManager.addWatch(secondWatch)

// Rendering
watchManager.renderWatches("container") // Rendering the first view
const intervalId = setInterval(
    () => watchManager.renderWatches("container"),
    1000,
) // Re-render every 1s
