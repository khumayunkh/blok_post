import React from "react";
import style from './contacts.module.css'


function Contacts(){
    return(
        <div className={style.contacts}>
            <div className={style.container}>
                <div className={style.contacts_in}>
                    <h2>Обратная связь</h2>
                    <input placeholder="Имя" className={style.name}/>
                    <input placeholder="Номер" className={style.number}/>
                    <input placeholder="Введите комментарий" className={style.comments}/>
                    <button className={style.btn}>ЗАПРОС ЗВОНКА</button>
                </div>
            </div>
        </div>
    )
}


export default Contacts