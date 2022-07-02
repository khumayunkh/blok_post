import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/PostSlice";
import style from './post.module.css'


function Posts(){
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodos())
    },[])
    return(
        <div className={style.posts}>
            <div className={style.container}>
                <div className={style.posts_in}>
                    <div className={style.input}>
                        <input />
                        <button>send</button>
                    </div>
                    {todos.map(item=>(
                        <div className={style.items}>
                           <h2>{item.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Posts