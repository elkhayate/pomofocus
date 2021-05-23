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
  const [clickedBy , setClickedBy] = useState("pomo")
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
  const handlePomo = () => {setClickedBy("pomo"); clockRef.current.stop(); setTime(which.one); setPause(true) }
  const handleShort = () => {setClickedBy("short"); clockRef.current.stop();  setTime(which.three); setPause(true)}
  const handleLong = () => {setClickedBy("long"); clockRef.current.stop(); setTime(which.two); setPause(true)}
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
  props.call(clickedBy)
  const date = useMemo(()=> {return (Date.now() + 60000 * time)}, [time]);
  const Style = {backgroundColor : "rgba(0, 0, 0, 0.15)"};
  var Stylee = null;
  if(clickedBy === "pomo") {
    Stylee = {color : "#db524d"};
  }else if (clickedBy === "short") {
    Stylee = {color : "#468e91"}
  }else if (clickedBy === "long") {
    Stylee = {color : "#437ea8"}
  }
  return (
    <div className={style.counter}>
      <div className={style.items}>
        <div style={clickedBy === "pomo" ? Style : null} onClick={handlePomo}>Pomodoro</div>
        <div style={clickedBy=== "short" ? Style : null} onClick={handleShort}>Short Break</div>
        <div style={clickedBy === "long" ? Style : null} onClick={handleLong}>Long Break</div>
      </div>
      {Timer(date)}
      {
      pause ?       
      <button
        style={Stylee}
        onClick={() => {
          handleStart();
          Pause();
        }}
      >
        START
      </button> : 
       <button
       style={Stylee}
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
