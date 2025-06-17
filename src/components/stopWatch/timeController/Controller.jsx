import { useState } from "react"

function Controller() {
    const [timerState, setTimerState] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);


    const handleStart = () => {
        setTimerState(true);
    }

    const handleStop = () => {
        setTimerState(false);
    }

    const handleReset = () => {

    }

    const handleResume = () => {

    }

    return (
        <>
            {timerState ?
                (<button onClick={handleStart}>
                    Start
                </button>) : (<button onClick={handleStop}>
                    Stop
                </button>)}

            <button onClick={handleReset}>
                Reset
            </button>
            <button onClick={handleResume}>
                Resume
            </button>
        </>
    )
}

export default Controller;