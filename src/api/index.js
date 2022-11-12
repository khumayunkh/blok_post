import axios from "axios"

export const getTodos = async() => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=15')
}

