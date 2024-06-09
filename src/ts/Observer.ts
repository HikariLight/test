import { Watch } from "./model/Watch"

interface Observer {
    update(subject: Watch[]): void
}

export { Observer }
