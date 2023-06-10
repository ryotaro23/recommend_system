import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useParams, Link } from 'react-router-dom';
import { TimeAgo } from './time';
import { Button, Card, CardContent, Typography, Box, Avatar, Paper, Grid, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const PostDetail = ()=>{
    const params = useParams()
    const {postId} = params
    const matchedPost = useSelector((state:RootState) =>
        state.posts.find(post=>post.id == postId ))
    const users = useSelector((state:RootState)=>state.users)
    const user= users.find(user=>user.id=='1');
  
    // Dummy comments
    const comments = [
        {id: 1, comment: '1コメ', author: 'User1'},
        {id: 2, comment: '2コメあざ', author: 'User2'},
    ];

    if(!matchedPost){
        return(
            <section>
                <Typography variant="h4" component="div">
                    指定の投稿がありません
                </Typography>
            </section>
        )
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card elevation={6}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {matchedPost.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            <TimeAgo timestamp={matchedPost.date} />
                        </Typography>
                        <Divider style={{margin: '10px 0'}} />
                        <Typography variant="body2">
                            {matchedPost.content}
                        </Typography>
                        <Divider style={{margin: '10px 0'}} />
                        <Box display="flex" alignItems="center">
                            <Avatar>{user?.name[0]}</Avatar>
                            <Typography variant="body2" color="text.secondary" style={{marginLeft: '10px'}}>
                                投稿者: {user?.name}
                            </Typography>
                        </Box>
                    </CardContent>
                    <Box display="flex" justifyContent="flex-end" p={2}>
                        <Button component={Link} to={`/posts/edit/${postId}`} variant="contained" color="primary">
                            投稿編集
                        </Button>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" component="div">
                    コメント
                </Typography>
                {comments.map((comment) => (
                    <Paper key={comment.id} style={{ marginBottom: '10px', padding: '15px' }}>
                        <Box display="flex" alignItems="center">
                            <Avatar>{comment.author[0]}</Avatar>
                            <Typography variant="body1" style={{marginLeft: '10px'}}>
                                {comment.comment}
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            投稿者: {comment.author}
                        </Typography>
                    </Paper>
                ))}
                <Box mt={2}>
                    <Button component={Link} to='/' startIcon={<ArrowBackIcon />} variant="contained">
                        トップに戻る
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}
