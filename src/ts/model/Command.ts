import { Watch } from "./Watch"

interface Command {
    watch: Watch

    execute(): void
    undo(): void
}

export { Command }
