import { WatchState } from "./WatchState"
import { EditMinuteState } from "./EditMinutesState"
import { Watch } from "./Watch"

class EditHourState implements WatchState {
    handleMode(watch: Watch): void {
        watch.setState(new EditMinuteState())
    }

    handleIncrease(watch: Watch): void {
        watch.getTimeOffset().hours += 1
    }

    handleDecrease(watch: Watch): void {
        watch.getTimeOffset().hours -= 1
    }

    toString = (): string => {
        return "Edit Hours"
    }
}

export { EditHourState }
