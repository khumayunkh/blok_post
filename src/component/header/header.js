import React from "react";
import style from './header.module.css'


function Header(){
    return(
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_in}>
                    <div className={style.logo}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png"/>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Header