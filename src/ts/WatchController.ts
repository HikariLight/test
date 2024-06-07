import { WatchModel } from "./WatchModel"
import { WatchView } from "./WatchView"

class WatchController {
    private watchModel: WatchModel
    private watchView: WatchView

    constructor(watchModel: WatchModel, watchView: WatchView) {
        this.watchModel = watchModel
        this.watchView = watchView

        this.watchView.bindModeToggle(this.handleDisplayModetoggle)
        this.watchView.bindAddWatch(this.addNewWatch)
    }

    public addNewWatch = (timeZone: string): void => {
        this.watchModel.createWatch(timeZone)
        this.renderView()
    }

    public handleIncreaseClick = (id: number) => {
        this.watchModel.getWatch(id).increase()
        this.renderView()
    }

    public handleModeClick = (id: number) => {
        this.watchModel.getWatch(id).toggleMode()
        this.renderView()
    }

    public handleLightClick = (id: number) => {
        this.watchModel.getWatch(id).toggleLight()
        this.renderView()
    }

    public handleResetClick = (id: number) => {
        this.watchModel.getWatch(id).reset()
        this.renderView()
    }

    public handleDisplayModetoggle = () => {
        this.watchModel.toggleDisplayFormat()
        this.renderView()
    }

    public toggleWatchFormat = (): void => {
        this.watchModel.toggleDisplayFormat()
        this.renderView()
    }

    public renderView = (): void => {
        this.watchView.renderWatches(
            this.watchModel.getWatches(),
            this.handleModeClick,
            this.handleLightClick,
            this.handleIncreaseClick,
            this.handleResetClick,
        )
    }
}

export { WatchController }
