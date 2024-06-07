import "./styles/index.css"
import { WatchModel } from "./ts"
import { WatchView } from "./ts"
import { WatchController } from "./ts"

document.addEventListener("DOMContentLoaded", () => {
    const watchModel = new WatchModel()
    const watchView = new WatchView("watchContainer")
    const controller = new WatchController(watchModel, watchView)

    // Rendering
    controller.renderView()
    try {
        const intervalId = setInterval(() => controller.renderView(), 1000) // Re-render every 1s
    } catch (error) {
        console.error(error)
    }
})
