import React,{useRef, useState} from 'react';
import Countdown,{zeroPad} from "react-countdown";
import style from "./counter.module.css";



const renderer = ({minutes, seconds}) => {
      return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>
    
  };
  

function Counter() {
    const [pause, setPause] = useState(true)
    const clockRef = useRef();
    const handleStart = () => {
        clockRef.current.start();
    }
    const handlePause = (e) => {
        clockRef.current.pause();
        
    }
  
    return (
        <div className={style.counter}>
            <div className={style.items}>
                <div>Pomodoro</div>
                <div>Short Break</div>
                <div>Long Break</div>
            </div>
        <h1 className={style.count}><Countdown
            date={Date.now() + 1200000}
            ref={clockRef}
            autoStart={false}
            renderer = {renderer}
        /></h1>
         <button className={style.btn} onClick={handleStart}>START</button> 
         <button className={style.btn} onClick={handlePause}>PAUSE</button>
        
        </div>
    );
}

export default Counter;
