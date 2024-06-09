import { Watch } from "./Watch"
import { Observer } from "./Observer"
import { Subject } from "./Subject"

class WatchModel implements Subject {
    private watches: Watch[]
    observers: Observer[]

    constructor() {
        this.watches = []
        this.observers = []
    }

    public attach(observer: Observer): void {
        if (this.observers.includes(observer)) return
        this.observers.push(observer)
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer)
        if (observerIndex === -1) return
        this.observers.splice(observerIndex, 1)
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this.watches)
        }
    }

    public getWatches = (): Watch[] => {
        return this.watches
    }

    public addWatch = (watch: Watch) => {
        this.watches.push(watch)
        this.notify()
    }

    public createWatch = (timeZone: string) => {
        try {
            this.watches.push(new Watch(timeZone))
            this.notify()
        } catch (error) {
            console.error(error)
        }
    }

    public increaseWatchTime = (id: number) => {
        this.watches.at(id).increase()
        this.notify()
    }

    public toggleWatchMode = (id: number) => {
        this.watches.at(id).toggleMode()
        this.notify()
    }

    public toggleWatchLight = (id: number) => {
        this.watches.at(id).toggleLight()
        this.notify()
    }

    public resetWatch = (id: number) => {
        this.watches.at(id).reset()
        this.notify()
    }

    public toggleDisplayFormat = () => {
        this.watches.forEach((watch) => {
            watch.toggleTimeFormat()
        })
        this.notify()
    }
}

export { WatchModel }
