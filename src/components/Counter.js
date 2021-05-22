import React, { useRef, useState, useMemo, useEffect } from "react";
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
  const [pause, setPause] = useState(true);
  const [time, setTime] = useState(null);
  const date = useMemo(()=> {return (Date.now() + 60000 * time)}, [time]);
  
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
  const Timer = (value) => {
      return (
      <h1 className={style.count}>
        <Countdown
          date={value}
          ref={clockRef}
          autoStart={false}
          renderer={renderer}
        />
      </h1>
      );
  };
  const handlePomo = () => {clockRef.current.stop(); setTime(25); }
  const handleShort = () => {clockRef.current.stop();  setTime(5);}
  const handleLong = () => {clockRef.current.stop(); setTime(15);}
  return (
    <div className={style.counter}>
      <div className={style.items}>
        <div onClick={handlePomo}>Pomodoro</div>
        <div onClick={handleShort}>Short Break</div>
        <div onClick={handleLong}>Long Break</div>
      </div>
      {Timer(date)}
      {
      pause ?       
      <button
        onClick={() => {
          handleStart();
          Pause();
        }}
      >
        START
      </button> : 
       <button
        className={style.btn}
        onClick={() => {
          handlePause();
          Pause();
        }}
      >
        STOP
      </button>}

     
    </div>
  );
}

export default Counter;
