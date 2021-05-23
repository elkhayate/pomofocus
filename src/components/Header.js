import React,{useState} from 'react';
import style from "./header.module.css";
import valide from "../img/valide.png";
import graph from "../img/graph.png";
import user from "../img/user.png";
import config from "../img/config.png";
import styles from "./setting.module.css";
import remove from "../img/remove.png";

const refreshPage = ()=>{
    window.location.reload();
 }

function Header(props) {
    const [show , setShow] = useState(false);
    const [times, setTimes] = useState({
        one : 25, two : 15 , three : 5
    })
    const handleSetting = () => {
            setShow(!show)
    }
    const handleChange = (e) => {
        setTimes({...times,[e.target.name] : Number(e.target.value)})
    }
    const onTrigger = () => {
        props.parentCallBack(times)
        
    }
    const handleSubmit = (e) => {
        setShow(false)
        onTrigger();
        e.preventDefault();
    }
    

    return(
        <>
        <div className={style.header}>
            <div className={style.logo} onClick={refreshPage}>
                <img src={valide} alt="valide"/>
                <h3 className={style.title}>Pomofocus</h3>
            </div>
            <div className={style.items}>
                <div className={style.item}>
                    <img src={graph} alt=""/>
                    <div className={style.itemtext}>Report</div>
                </div>
                <div onClick={handleSetting} className={style.item}>
                    <img src={config} alt=""/>
                    <div className={style.itemtext} >Setting</div>
                </div>
                <div className={style.item}>
                    <img src={user} alt=""/>
                    <div className={style.itemtext}>Login</div>
                </div>
            </div>
        </div>
        {show&& (<div className={styles.container}>
            <div className={styles.header}>
                <h1>TIMER SETTING</h1>
                <div onClick={handleSetting} className={styles.remove}><img src={remove}  alt="remove"/></div>
            </div>
            <div className={styles.time}>
                <h1>Time (minutes)</h1>
                <div className={styles.items}>                
                <div className={styles.item}>
                    <h4>Pomodoro</h4>
                    <input value={times.one} type="number" name ="one" onChange={handleChange}/>
                </div>
                <div className={styles.item}>
                    <h4>Short</h4>
                    <input value={times.three} type="number" name ="three" onChange={handleChange}/>
                </div>
                <div className={styles.item}>
                    <h4>Long</h4>
                    <input value={times.two} type="number" name ="two" onChange={handleChange} />
                </div>
                </div>
                
            </div>
            <div className={styles.footer}>
            <button onClick={handleSubmit} className={styles.btn}>OK</button>
            </div>
            
        </div>)}
        </>
    )
}


export default Header;