import { Watch } from "./Watch"
import { Observer } from "../Observer"
import { Subject } from "../Subject"
import { Command } from "./Command"
import { IncreaseCommand } from "./IncreaseCommand"
class WatchModel implements Subject {
    private static instance: WatchModel
    private watches: Watch[]
    private commands: Command[]
    observers: Observer[]

    private constructor() {
        this.watches = []
        this.observers = []
        this.commands = []
    }

    static getInstance = (): WatchModel => {
        if (!WatchModel.instance) {
            WatchModel.instance = new WatchModel()
        }
        return WatchModel.instance
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
        const watch = this.watches.at(id)
        const increaseCommand = new IncreaseCommand(watch)
        increaseCommand.execute()
        this.commands.push(increaseCommand)
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
        const watch = this.watches.at(id)
        this.commands.forEach((command) => {
            if (command.watch === watch) command.undo()
        })
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
