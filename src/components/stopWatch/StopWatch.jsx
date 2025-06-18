// import {useState, useEffect} from 'react';

// function StopWatch() {

//     const [timer, setTimer] = useState(60);
//     let hours = 1;
//     let minutes = 32;
//     let seconds = 5;

//     return (
//         <>
//             <div style={Styles.timerDiv}>
//                 <h1 style={Styles.heading}>STOP WATCH</h1>
//                 <div style={Styles.timeBox}>
//                     <div style={Styles.timee}>{hours} H</div>
//                     <div style={Styles.timee}>{minutes} M</div>
//                     <div style={Styles.timee}>{seconds} S</div>
//                 </div>
//                 <div>
//                     <button>Start</button>
//                     <button>Reset</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// const Styles = {
//     heading: {
//         fontSize: '2rem',
//         fontWeight: '800',
//         color: 'darkBlue',
//         marginBottom: '10px'
//     },
//     timerDiv: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100dvh"

//     },

//     timeBox: {
//         display: "flex",
//         gap: "10px"
//     },

//     timee: {
//         display: "flex",
//         height: "80px",
//         width: "80px",
//         fontSize: "1.2rem",
//         borderRadius: "4px",
//         background: "grey",
//         color: "white",
//         alignItems: "center",
//         justifyContent: "center"
//     }

// }

// export default StopWatch;

import { useState, useEffect, useRef } from 'react';

function StopWatch() {
  const initialTimeInSeconds = 1 * 3600 + 32 * 60 + 5; // 1h 32m 5s
  const [secondsLeft, setSecondsLeft] = useState(initialTimeInSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  // Calculate HH:MM:SS from total seconds
  const formatTime = (timeInSeconds) => {
    const hrs = Math.floor(timeInSeconds / 3600);
    const mins = Math.floor((timeInSeconds % 3600) / 60);
    const secs = timeInSeconds % 60;
    return { hrs, mins, secs };
  };

  const { hrs, mins, secs } = formatTime(secondsLeft);

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current); // Cleanup
  }, [isRunning]);

  const handleStart = () => {
    if (!isRunning && secondsLeft > 0) {
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setSecondsLeft(initialTimeInSeconds);
  };

  return (
    <div style={Styles.timerDiv}>
      <h1 style={Styles.heading}>STOP WATCH</h1>
      <div style={Styles.timeBox}>
        <div style={Styles.timee}>{String(hrs).padStart(2, '0')} H</div>
        <div style={Styles.timee}>{String(mins).padStart(2, '0')} M</div>
        <div style={Styles.timee}>{String(secs).padStart(2, '0')} S</div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleStart} style={Styles.btn}>Start</button>
        <button onClick={handleReset} style={Styles.btn}>Reset</button>
      </div>
    </div>
  );
}

const Styles = {
  heading: {
    fontSize: '2rem',
    fontWeight: '800',
    color: 'darkBlue',
    marginBottom: '10px'
  },
  timerDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100dvh"
  },
  timeBox: {
    display: "flex",
    gap: "10px"
  },
  timee: {
    display: "flex",
    height: "80px",
    width: "80px",
    fontSize: "1.2rem",
    borderRadius: "4px",
    background: "grey",
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    background: '#007BFF',
    color: '#fff'
  }
};

export default StopWatch;
