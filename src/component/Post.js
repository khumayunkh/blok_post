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
                    
                </div>
            </div>
        </div>
    )
}

export default Posts