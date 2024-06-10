import { Watch } from "./Watch"

interface WatchState {
    handleMode(watch: Watch): void
    handleIncrease(watch: Watch): void
    handleDecrease(watch: Watch): void
}

export { WatchState }
