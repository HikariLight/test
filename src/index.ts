import "./styles/index.css"
import { WatchModel, WatchView, WatchController } from "./ts"

document.addEventListener("DOMContentLoaded", () => {
    try {
        const watchModel = WatchModel.getInstance()
        const controller = new WatchController(watchModel)
        const watchView = new WatchView("root", controller)

        watchModel.attach(watchView)

        controller.createWatch("Europe/Paris")

        // Rendering
        watchView.render()
        const intervalId = setInterval(() => watchView.render(), 1000) // Re-render every 1s
    } catch (error) {
        console.error(error)
    }
})
