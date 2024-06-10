import { WatchState } from "./WatchState"
import { NormalState } from "./NormalState"
import { Watch } from "./Watch"

class EditMinuteState implements WatchState {
    handleMode(watch: Watch): void {
        watch.setState(new NormalState())
    }

    handleIncrease(watch: Watch): void {
        watch.getTimeOffset().minutes += 1
    }

    handleDecrease(watch: Watch): void {
        watch.getTimeOffset().minutes -= 1
    }

    toString = (): string => {
        return "Edit Minutes"
    }
}

export { EditMinuteState }
