import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import style from './header.module.css'


function Header(){
    return(
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_in}>
                    <div className={style.logo}>
                        <img src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"/>
                    </div>
                    <div className={style.contact}>
                        <NavLink className={style.information} to='/contacts'>Contacts</NavLink>
                        <h3>About Us</h3>
                        <h3>Email</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header