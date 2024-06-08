import { Observer } from "./Observer"

interface Subject {
    observers: Observer[]

    attach(observer: Observer): void

    detach(observer: Observer): void
}

export { Subject }
