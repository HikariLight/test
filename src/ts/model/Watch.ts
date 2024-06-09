import { WatchState } from "./WatchState"
import { NormalState } from "./NormalState"

class Watch {
    private currentTime: Date
    private state: WatchState
    private timeFormat: "12" | "24"
    private timeZone: string
    private lightOn: boolean
    private timeOffset: { hours: number; minutes: number }

    constructor(timeZone: string) {
        this.currentTime = new Date()
        this.state = new NormalState()
        this.lightOn = false
        this.timeFormat = "24"
        this.timeZone = timeZone
        this.timeOffset = { hours: 0, minutes: 0 }
    }

    public setState = (state: WatchState): void => {
        this.state = state
    }

    public toggleTimeFormat = () => {
        this.timeFormat === "24"
            ? (this.timeFormat = "12")
            : (this.timeFormat = "24")
    }

    public increase(): void {
        this.state.handleIncrease(this)
    }

    public toggleLight(): void {
        this.lightOn = !this.lightOn
    }

    public toggleMode = (): void => {
        this.state.handleMode(this)
    }

    public reset(): void {
        this.timeOffset.hours = 0
        this.timeOffset.minutes = 0
    }

    public getCurrentTime(): string {
        this.currentTime = new Date() // update time

        // Apply modifications
        this.currentTime.setHours(
            this.currentTime.getHours() + this.timeOffset.hours,
        )
        this.currentTime.setMinutes(
            this.currentTime.getMinutes() + this.timeOffset.minutes,
        )

        // Change format
        return new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: this.timeZone,
            hour12: this.timeFormat == "24" ? false : true,
        }).format(this.currentTime)
    }

    public getLightStatus = (): boolean => {
        return this.lightOn
    }

    public getTimeOffset = (): { hours: number; minutes: number } => {
        return this.timeOffset
    }

    public getTimeZone = (): string => {
        return this.timeZone
    }

    public getCurrentMode = (): string => {
        return this.state.toString()
    }
}

export { Watch }
