import React, { useState } from "react";
import { useDispatch,useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import {addPost, updatePost} from './postsSlice'
import {  useParams,useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store';



export const EditPost = ()=>{
    const params = useParams()
    const {postId} = params
    const selectedPost = useSelector((state:RootState)=>
        state.posts.find(post => post.id === postId)
    )
    if(!selectedPost){
        return(
            <section>
            <h1>指定の投稿がありません</h1>
        </section>
        )
    }

    const [title,setTitle] = useState(selectedPost.title)
    const [content,setContent] = useState(selectedPost.content)
    const postid = selectedPost.id
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onChangeTitle = (e: { target: { value: React.SetStateAction<string>; }; }) => setTitle(e.target.value)
    const onChangeContent = (e: { target: { value: React.SetStateAction<string>; }; }) => setContent(e.target.value)

    const onSaveChange = () =>{
        if(title&&content){
            dispatch(updatePost(
                postid,
                title,
                content,
          
            ))

            navigate(`/posts/${postId}`)
        }
    }

    return(
        <section>
            <h2>投稿編集</h2>
            <form>
            <label htmlFor="postTitle">タイトル：</label>
            <input type="text"
                id="postTitle"
                placeholder="入力してください"
                value={title}
                onChange={onChangeTitle}     />
            <label htmlFor="postContent">内容：</label>
            <textarea name="content" value={content} onChange={onChangeContent}></textarea>
            </form>
            <button type="button" onClick={onSaveChange}>送信</button>
        </section>
    )

}