import axios from "axios"

export const getTodos = async() => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=15')
}


export const addNewTodos = async(text) => {
    return await axios.post('https://jsonplaceholder.typicode.com/todos',{
        title: text,
        userId: 1,
        completed: false,     
    })
}
