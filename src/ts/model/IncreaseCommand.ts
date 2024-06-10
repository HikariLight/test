import { Command } from "./Command"
import { Watch } from "./Watch"

class IncreaseCommand implements Command {
    watch: Watch

    constructor(watch: Watch) {
        this.watch = watch
    }

    execute(): void {
        this.watch.increase()
    }

    undo(): void {
        this.watch.decrease()
    }
}

export { IncreaseCommand }
