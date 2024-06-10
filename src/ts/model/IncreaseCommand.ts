import { Command } from "./Command"
import { Watch } from "./Watch"

class IncreaseCommand implements Command {
    watch: Watch
    executed: boolean

    constructor(watch: Watch) {
        this.watch = watch
    }

    execute(): void {
        this.watch.increase()
        this.executed = true
    }

    undo(): void {
        this.watch.decrease()
        this.executed = false
    }
}

export { IncreaseCommand }
