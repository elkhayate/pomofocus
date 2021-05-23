import React, { useRef, useState, useMemo} from "react";
import Countdown, { zeroPad } from "react-countdown";
import style from "./counter.module.css";

const renderer = ({ minutes, seconds }) => {
  return (
    <span>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
};

function Counter(props) {
  const [pause, setPause] = useState(true);
  const [time, setTime] = useState(25);
  const [which, setWhich] = useState({
    one : 25  , two : 15  , three :  5
  })
 
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
  const handlePomo = () => {clockRef.current.stop(); setTime(which.one); setPause(true) }
  const handleShort = () => {clockRef.current.stop();  setTime(which.three); setPause(true)}
  const handleLong = () => {clockRef.current.stop(); setTime(which.two); setPause(true)}
  if(props.set.one !== which.one) {
    setWhich({...which,one : props.set.one})
    setTime(props.set.one);
  }else if(props.set.two !== which.two){
    setWhich({...which,two : props.set.two})
    setTime(props.set.two);
  }else if (props.set.three !== which.three){
    setWhich({...which,three : props.set.three})
    setTime(props.set.three);
  }
  
  const date = useMemo(()=> {return (Date.now() + 60000 * time)}, [time]);
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
