class Watch {
    private currentTime: Date
    private mode: "view" | "editHours" | "editMinutes"
    private timeFormat: "12" | "24"
    private timeZone: string
    private lightOn: boolean
    private timeOffset: TimeEdit

    constructor(timeZone: string = "UTC") {
        this.currentTime = new Date()
        this.mode = "view"
        this.lightOn = false
        this.timeFormat = "24"
        this.timeZone = timeZone
        this.timeOffset = { hours: 0, minutes: 0 }
    }

    public toggleMode(): void {
        if (this.mode === "view") {
            this.mode = "editHours"
        } else if (this.mode === "editHours") {
            this.mode = "editMinutes"
        } else {
            this.mode = "view"
        }
    }

    public toggleTimeFormat = () => {
        this.timeFormat === "24"
            ? (this.timeFormat = "12")
            : (this.timeFormat = "24")
    }

    public increase(): void {
        if (this.mode === "editHours") this.timeOffset.hours += 1
        if (this.mode === "editMinutes") this.timeOffset.minutes += 1
    }

    public toggleLight(): void {
        this.lightOn = !this.lightOn
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

    public getLightStatus = () => {
        return this.lightOn
    }

    public getTimeZone = (): string => {
        return this.timeZone
    }
}

export { Watch }
