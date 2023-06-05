import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import {  useParams,Link } from 'react-router-dom';
import { TimeAgo } from './time';


export const PostDetail = ()=>{
    const params = useParams()
    const {postId} = params
    const matchedPost = useSelector((state:RootState) =>
        state.posts.find(post=>post.id == postId ))
    const users = useSelector((state:RootState)=>state.users)
    const user= users.find(user=>user.id=='1');

    if(!matchedPost){
        return(
            <section>
                <h1>指定の投稿がありません</h1>
            </section>
        )
    }
    return (
        <section>
            <h2>{matchedPost.title}</h2>
            <TimeAgo timestamp={matchedPost.date} />
            <p>{matchedPost.content}</p>
            <p>投稿者:{user?.name}</p>
            <Link to={`/posts/edit/${postId}`}>投稿編集</Link>
        </section>
    )
    
}