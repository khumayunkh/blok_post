import React from "react";
import { useSelector } from "react-redux";


function Posts(){
    const todos = useSelector(state => state.todos.todos)
    console.log(todos)
    return(
        <>
            <h1>hello</h1>
            {todos.map(item => item.userId)}
        </>
    )
}

export default Posts