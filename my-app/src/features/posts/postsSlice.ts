import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

export type Post = {
    id: string,
    title: string,
    content: string,
    date:string
}

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' , date: sub(new Date(), { minutes: 10 }).toISOString()},
    { id: '2', title: 'Second Post', content: 'More text', date: sub(new Date(), { minutes: 5 }).toISOString() }
]
const postSlices = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost:{
            reducer(state,action:PayloadAction<Post>){
            state.push(action.payload)
        },
        prepare(title,content,userId){
            return{
                payload:{
                    id:nanoid(),
                    date:new Date().toISOString(),
                    title,
                    content,
                    user:userId
                }
            }
        }
    },
    updatePost:{
        reducer(state,action:PayloadAction<Post>){
            const addedPost = state.find(post =>post.id == action.payload.id);
            if(addedPost) {
                addedPost.title = action.payload.title
                addedPost.content = action.payload.content
            }
        },
        prepare(postid:string,title:string,content:string){
            return{
                payload:{
                    id:postid,
                    title,
                    content,
                    date:new Date().toISOString(),
                }
            }
        }
    }
    }
})
export const {addPost,updatePost} = postSlices.actions
export default postSlices.reducer