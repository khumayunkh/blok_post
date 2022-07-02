import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodos, addTodos, fetchTodos, removeTodos } from "../store/PostSlice";
import style from './post.module.css'


function Posts(){
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    useEffect(() => {
        dispatch(fetchTodos())
    },[])
    const handleAction = () => {
          dispatch(addNewTodos(text));
          setText('');
      }
    return(
        <div className={style.posts}>
            <div className={style.container}>
                <div className={style.posts_in}>
                    <div className={style.input}>
                        <input value={text} onChange={e => setText(e.target.value)}/>
                        <button onClick={handleAction}>send</button>
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