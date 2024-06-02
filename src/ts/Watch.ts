class Watch {
    private currentTime: Date
    private mode: "view" | "editHours" | "editMinutes"
    private lightOn: boolean
    private timeOffset: TimeEdit

    constructor() {
        this.currentTime = new Date()
        this.mode = "view"
        this.lightOn = false
        this.timeOffset = { hours: 0, minutes: 0 }
    }

    public modeButton(): void {
        console.log("Mode button clicked")
        if (this.mode === "view") {
            this.mode = "editHours"
        } else if (this.mode === "editHours") {
            this.mode = "editMinutes"
        } else {
            this.mode = "view"
        }
    }

    public increaseButton(): void {
        if (this.mode === "editHours") this.timeOffset.hours += 1
        if (this.mode === "editMinutes") this.timeOffset.minutes += 1
    }

    public lightButton(): void {
        console.log("Light Button pressed")
        this.lightOn = !this.lightOn
    }

    public getTime(): string {
        this.currentTime = new Date()
        this.currentTime.setHours(
            this.currentTime.getHours() + this.timeOffset.hours,
        )
        this.currentTime.setMinutes(
            this.currentTime.getMinutes() + this.timeOffset.minutes,
        )
        return this.currentTime.toLocaleTimeString()
    }

    public toHTML(): string {
        return `
        <div class="${this.lightOn ? "" : "dark"}">
            <div class="dark:bg-slate-800 bg-white-800 mx-auto border border-purple-800 rounded-xl p-4 w-1/2 grid place-items-center shadow-md">
                <p class="text-xl text-purple-600">${this.getTime()}</p>
        
                <div class="flex space-x-2">
                    <button id="mode" class="p-2 bg-purple-800 text-white rounded-md">Mode</button>
                    <button id="increase" class="p-2 bg-purple-800 text-white rounded-md">Increase</button>
                    <button id="light" class="p-2 bg-purple-800 text-white rounded-md">Light</button>
                </div>
        
            </div>
        </div>
    `
    }
}

export { Watch }
