import "./styles/index.css"
import { WatchModel, WatchView, WatchController } from "./ts"

document.addEventListener("DOMContentLoaded", () => {
    const watchModel = new WatchModel()
    const controller = new WatchController(watchModel)
    const watchView = new WatchView("root", controller)

    watchModel.attach(watchView)

    controller.createWatch("Europe/Paris")

    // Rendering
    try {
        watchView.render()
        const intervalId = setInterval(() => watchView.render(), 1000) // Re-render every 1s
    } catch (error) {
        console.error(error)
    }
})
