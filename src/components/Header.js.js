import React from 'react';
import style from "./header.module.css";
import valide from "../img/valide.png";
import graph from "../img/graph.png";
import user from "../img/user.png";
import config from "../img/config.png";

const refreshPage = ()=>{
    window.location.reload();
 }

function Header() {
    return(
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
                <div className={style.item}>
                    <img src={config} alt=""/>
                    <div className={style.itemtext}>Setting</div>
                </div>
                <div className={style.item}>
                    <img src={user} alt=""/>
                    <div className={style.itemtext}>Login</div>
                </div>
            </div>
        </div>
    )
}


export default Header;