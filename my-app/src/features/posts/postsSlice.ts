import { createSlice } from "@reduxjs/toolkit";

export type Post = {
    id: string,
    title: string,
    content: string
}

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]
const postSlices = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state,action){
            state.push(action.payload)
        }
    }
})
export const {addPost} = postSlices.actions
export default postSlices.reducer