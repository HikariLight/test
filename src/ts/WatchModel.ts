import { Watch } from "./Watch"

class WatchModel {
    private watches: Watch[]

    constructor() {
        this.watches = []
    }

    public getWatches = (): Watch[] => {
        return this.watches
    }

    public getWatch = (id: number): Watch => {
        return this.watches.at(id)
    }

    public addWatch = (watch: Watch) => {
        this.watches.push(watch)
    }

    public createWatch = (timeZone: string) => {
        try {
            this.watches.push(new Watch(timeZone))
        } catch (error) {
            console.error(error)
        }
    }

    public toggleDisplayFormat = () => {
        this.watches.forEach((watch) => {
            watch.toggleTimeFormat()
        })
    }
}

export { WatchModel }
