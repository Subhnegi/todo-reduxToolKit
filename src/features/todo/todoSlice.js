import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos: []
} 

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todo: action.payload.todo,
                checked: action.payload.checked,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((prevTodo) =>  prevTodo.id === action.payload.id ? { ...prevTodo, todo:action.payload.todo} : prevTodo )
        },
        toggleChecked: (state, action) => {
            state.todos = state.todos.map((prevTodo) => prevTodo.id === action.payload ? {...prevTodo, checked: !prevTodo.checked} : prevTodo)
        },
    }

})

export const {addTodo, removeTodo, updateTodo, toggleChecked} = todoSlice.actions
export default todoSlice.reducer