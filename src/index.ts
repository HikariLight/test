import "./styles/index.css"
import { WatchModel } from "./ts"
import { WatchView } from "./ts"
import { WatchController } from "./ts"

document.addEventListener("DOMContentLoaded", () => {
    const watchModel = new WatchModel()
    const watchView = new WatchView("watchContainer")
    const controller = new WatchController(watchModel, watchView)

    // Rendering
    watchView.renderWatches(
        watchModel.getWatches(),
        controller.handleModeClick,
        controller.handleLightClick,
        controller.handleIncreaseClick,
        controller.handleResetClick,
    )
    try {
        const intervalId = setInterval(
            () =>
                watchView.renderWatches(
                    watchModel.getWatches(),
                    controller.handleModeClick,
                    controller.handleLightClick,
                    controller.handleIncreaseClick,
                    controller.handleResetClick,
                ),
            1000,
        ) // Re-render every 1s
    } catch (error) {
        console.error(error)
    }
})
