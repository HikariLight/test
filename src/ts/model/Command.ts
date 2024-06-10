import { Watch } from "./Watch"

interface Command {
    watch: Watch
    executed: boolean

    execute(): void
    undo(): void
}

export { Command }
