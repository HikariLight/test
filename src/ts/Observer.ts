import { Watch } from "./Watch"

interface Observer {
    update(subject: Watch[]): void
}

export { Observer }
