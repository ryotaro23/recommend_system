import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'
import { ReactionName } from "./reaction";

export type Post = {
    id: string,
    title: string,
    content: string,
    date:string
    reactions:Reactions
}
export type Reactions = {
    happy:number,
    sad:number,
    love:number,
    angry:number
}
const initialReactions:Reactions = {  
    happy: 0,
    sad: 0,
    love: 0,
    angry: 0,}

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' , date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions:initialReactions},
    { id: '2', title: 'Second Post', content: 'More text', date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions:initialReactions }
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
                    user:userId,
                    reactions:initialReactions
                }
            }
        }
    },
        updatePost:{
        reducer(state:any[],action:{payload:{id:string,title:string,content:string}}){
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
        // prepare(payload){
        //     return payload
        // }
    },
        addReaction:{
            reducer(state: any[],action: { payload: { id: string; reaction: string; }; }){
                const postid = action.payload.id
                const reaction:string = action.payload.reaction
                const existingPost = state.find(post => post.id === postid)
                if (existingPost) {
                  existingPost.reactions[reaction as ReactionName]++
                }
              },
              prepare(postId:string,reaction:string){
                return {
                    payload:{
                        id:postId,
                        reaction
                        
                    }
                }as { payload: { id: string; reaction: string } };
              }
            // prepare(payload){
            //     return payload
            // }

            }
        }
    }
)
export const {addPost,updatePost,addReaction} = postSlices.actions
export default postSlices.reducer