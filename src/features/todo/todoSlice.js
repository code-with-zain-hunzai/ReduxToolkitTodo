import { CreateSlice, createSlice, isAction, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            todo = {
                id: nanoid(),
                name: action.payload
            }
            state.todos.push(todo)
        }
        removeTodo: () => { }
    }
})