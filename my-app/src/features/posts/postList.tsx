import React from "react";
import { useSelector } from "react-redux";
import { Post } from "./postsSlice";
import { RootState } from "../../app/store";

export const PostList = () => {
    const posts = useSelector((state : RootState) =>state.posts);
    const renderedPosts = posts.map((post:Post) =>{

        return(
            <article className="post-excerpt" key={post.id}>
                <h3>{post.title}</h3>
                <p className="post-content">{post.content.substring(0,100)}</p>
            </article>
        )
        });

    return(
<section className="posts-list">
        <h2>投稿</h2>
        {renderedPosts}
</section>
    )
}