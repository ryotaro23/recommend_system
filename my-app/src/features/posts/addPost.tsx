import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import {addPost} from './postsSlice'


export const AddPost = () =>{
    const [title,setTitle] = useState('');
    const [content,setContent] =useState('');
    const onChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const onChangeContent = (e:React.ChangeEvent<HTMLTextAreaElement>)=>setContent(e.target.value);
    const dispatch = useDispatch();
    const onSavePost = ()=>{
        if(title && content){
            dispatch(
                addPost({
                    id:nanoid(),
                    title:title,
                    content:content,
                })
            )
        }
        setTitle('');
        setContent('');
    }

    return(
        <section>
            <h2>投稿を追加する</h2>
            <form>
                <label htmlFor="postTitle">タイトル</label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onChangeTitle} />
                <label htmlFor="postContent">内容</label>
                <textarea id="postContent" name="postContent" value = {content} onChange = {onChangeContent} />
                <button type="button" onClick={onSavePost}>投稿する</button>
            </form>
        </section>
    )
}