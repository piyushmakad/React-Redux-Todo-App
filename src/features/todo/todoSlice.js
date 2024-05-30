import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {        //initial state of store
    todos: [
        {id:1 , text : "Hello World"}
    ]
}

export const todoSlice = createSlice({  //slice takes name,initialState and reducers
    name: 'todo', 
    initialState,
    reducers: {
        addTodo: (state, action) =>  {  //state me current state milti h and action me uska data
            const todo = {
                id: nanoid(), text : action.payload  //payload is an object which we pass
            }

            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },    
    }
})

export const {addTodo, removeTodo } = todoSlice.actions  //individaul reducers ko bhi export karna padega
export default todoSlice.reducer //store.js sirf default reducer se update hoga isiliye ye bhi karna padega 