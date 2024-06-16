import {
    createSlice
} from "@reduxjs/toolkit"

// creating state
const initialState = {
    counter: 0
}

// creating slice
const counterSlice = createSlice({
    name: 'COUNTER',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        incrementBy: (state, action) => {
            state.counter += action.payload
        }
    }
})

export const {
    increment,
    decrement,
    incrementBy
} = counterSlice.actions

export default counterSlice.reducer