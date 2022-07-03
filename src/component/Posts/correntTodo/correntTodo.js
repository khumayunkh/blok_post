import React from "react";
import style from './post.module.css'

function Post({todos}){
    return(
        <div className={style.container}>
                {todos.map(item=>(
                    <div className={style.items}>
                       <h2>{item.title}</h2>
                    </div>
                ))}
        </div>
    )
}
export default Post
