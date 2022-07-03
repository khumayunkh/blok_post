import React from "react";
import style from './footer.module.css'



function Footer(){
    return(
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.footer_in}>
                    <div className={style.logo}>
                        <img src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"/>
                    </div>
                    <div className={style.information}>
                        <h2>Contact: +998 99 999-99-99</h2>
                        <h2>Email: email@email.com</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer