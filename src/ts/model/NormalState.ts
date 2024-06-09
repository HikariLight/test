import { WatchState } from "./WatchState"
import { EditHourState } from "./EditHoursState"
import { Watch } from "./Watch"

class NormalState implements WatchState {
    handleMode(watch: Watch): void {
        watch.setState(new EditHourState())
    }

    handleIncrease(watch: Watch): void {} // Nothing happens
}

export { NormalState }
