import React from "react";
import style from './contacts.module.css'


function Contacts(){
    return(
        <div className={style.contacts}>
            <div className={style.container}>
                <div className={style.contacts_in}>
                    <h2>Обратная связь</h2>
                    <input className={style.name}/>
                    <input className={style.number}/>
                    <input className={style.comments}/>
                    <button className={style.btn}>ЗАПРОС ЗВОНКА</button>
                </div>
            </div>
        </div>
    )
}


export default Contacts