import { WatchModel } from "../model/WatchModel"

class WatchController {
    private watchModel: WatchModel

    constructor(watchModel: WatchModel) {
        this.watchModel = watchModel
    }

    public createWatch = (timeZone: string): void => {
        timeZone = timeZone === "" ? "UTC" : timeZone
        this.watchModel.createWatch(timeZone)
    }

    public toggleDisplayFormat = (): void => {
        this.watchModel.toggleDisplayFormat()
    }

    public increaseWatchTime = (id: number) => {
        this.watchModel.increaseWatchTime(id)
    }

    public toggleWatchMode = (id: number) => {
        this.watchModel.toggleWatchMode(id)
    }

    public toggleWatchLight = (id: number) => {
        this.watchModel.toggleWatchLight(id)
    }

    public resetWatch = (id: number) => {
        this.watchModel.resetWatch(id)
    }
}

export { WatchController }
