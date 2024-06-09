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
}

export { EditMinuteState }
