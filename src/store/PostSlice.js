import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10')
        const data = response.data
        return data
    }
)

export const addNewTodos = createAsyncThunk(
    'todos/addNewTodos',
    async function(text, {dispatch}){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{
            title: text,
            userId: 1,
            completed: false,
            
        })
        const data = await response.data
        dispatch(addTodos(data))
    }
)

const initialState = {
    todos : [],
    status : null
}


const todoSlice = createSlice({
    name : 'todos',
    initialState : initialState,
    reducers:{
        addTodos(state, action){
            state.todos.push(action.payload)
        },
        removeTodos(state, action){
            state.todos = state.todos.filter(item => item.id !== action.payload.id)
        },
    },
    extraReducers:(builder) => {
        builder.addCase(fetchTodos.pending,(state) => {
            state.status = 'loading';
        })
        builder.addCase(fetchTodos.fulfilled,(state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
        })
        builder.addCase(fetchTodos.rejected,(state,action) =>{})
    }
})

export const {addTodos, removeTodos} = todoSlice.actions;
export default todoSlice