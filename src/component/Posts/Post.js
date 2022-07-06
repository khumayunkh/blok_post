import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodos,  fetchTodos } from "../../store/PostSlice";
import Post from "./correntTodo/correntTodo";
import Pagination from "./pogination/pagination";
import style from './post.module.css'


function Posts(){
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [currentPage,setCurrentPage] = useState(1)
    const [todosPerPage, setPostsPerPage] = useState(5)
    
    useEffect(() => {
        dispatch(fetchTodos())
    },[])

    const handleAction = () => {
          dispatch(addNewTodos(text));
          setText('');
    }

    const indexOfLastPost = currentPage * todosPerPage;
    const indexOfFirstPost = indexOfLastPost - todosPerPage;
    const currentPosts = todos.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return(
        <div className={style.posts}>
            <div className={style.posts_in}>
                    <div className={style.input}>
                        <input className={style.input_in} value={text} onChange={e => setText(e.target.value)}/>
                        <button className={style.send} onClick={handleAction}>send</button>
                    </div>
            <Post todos={currentPosts}/>
            <Pagination 
                todosPerPage={todosPerPage} 
                totalTodos = {todos.length} 
                paginate={paginate}/>
             </div>   
        </div>
    )
}

export default Posts