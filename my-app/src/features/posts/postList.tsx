import React from "react";
import { useSelector } from "react-redux";
import { Post } from "./postsSlice";
import { RootState } from "../../app/store";
import { Link } from "react-router-dom";
import { TimeAgo } from "./time";
import { ReactionButtons } from "./reaction";
import { Button, Card, CardContent, Typography, CardActions, Link as MuiLink, Grid, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const PostList = () => {
    const posts = useSelector((state : RootState) =>state.posts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    const renderedPosts = orderedPosts.map((post:Post) =>{

        return(
            <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card style={{ marginBottom: '15px', height: '100%' }}>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                            <TimeAgo timestamp={post.date} />
                        </Typography>
                        <Typography variant="body2">
                            {post.content.substring(0,100)}
                        </Typography>
                    </CardContent>
                    <Box mt={2} display="flex" justifyContent="space-between" alignItems="center" p={2}>
                        <ReactionButtons post={post} />
                        <Button component={Link} to={`/posts/${post.id}`} color="primary" variant="contained" endIcon={<ArrowForwardIcon />}>
                            詳細
                        </Button>
                    </Box>
                </Card>
            </Grid>
        )
    });

    return(
        <section>
            <Typography variant="h4" component="div" style={{ marginBottom: '15px' }}>
                投稿
            </Typography>
            <Grid container spacing={2}>
                {renderedPosts}
            </Grid>
        </section>
    )
}
