import React, { useRef, useState, useMemo } from "react";
import Countdown, { zeroPad } from "react-countdown";
import style from "./counter.module.css";

const renderer = ({ minutes, seconds }) => {
  return (
    <span>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
};

function Counter() {
  const date = useMemo(()=> {return (Date.now() + 1200000)}, []);
  const [pause, setPause] = useState(true);
  const clockRef = useRef();
  const handleStart = () => {
    clockRef.current.start();
  };
  const handlePause = () => {
    clockRef.current.pause();
  };
  const Pause = () => {
    setPause(!pause);
  };

  return (
    <div className={style.counter}>
      <div className={style.items}>
        <div>Pomodoro</div>
        <div>Short Break</div>
        <div>Long Break</div>
      </div>
      <h1 className={style.count}>
        <Countdown
          date={date}
          ref={clockRef}
          autoStart={false}
          renderer={renderer}
        />
      </h1>
      <button
        className={style.btn}
        onClick={() => {
          handleStart();
          Pause();
        }}
      >
        START
      </button>
      <button
        className={style.btn}
        onClick={() => {
          handlePause();
          Pause();
        }}
      >
        PAUSE
      </button>
    </div>
  );
}

export default Counter;
