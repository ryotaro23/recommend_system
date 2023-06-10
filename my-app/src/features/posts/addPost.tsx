import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {addPost} from './postsSlice'
import { RootState } from '../../app/store';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";


export const AddPost = () => {
    const [title, setTitle] = useState('');//投稿タイトル
    const [content, setContent] = useState('');//投稿内容
    const [open, setOpen] = useState(false); // モーダル制御用
    const dispatch = useDispatch();
    const [userId, setUserId] = useState('1'); // とりあえずuserIdを1に固定
    const users = useSelector((state: RootState) => state.users);
    const user = users.find(user => user.id === userId);

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);

    const onSavePost = () => {
        if (title && content && user) {
            dispatch(addPost(title, content, user));
            setOpen(false); // モーダルを閉じる
        }
        setTitle('');
        setContent('');
        setUserId('1');
    };
    return (
        <section>
            <Button variant="contained" onClick={() => setOpen(true)}>投稿を追加する</Button>
            <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">投稿を追加する</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="postTitle"
                        label="タイトル"
                        type="text"
                        fullWidth
                        value={title}
                        onChange={onChangeTitle}
                    />
                    <TextField
                        margin="dense"
                        id="postContent"
                        label="内容"
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        value={content}
                        onChange={onChangeContent}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        キャンセル
                    </Button>
                    <Button onClick={onSavePost} color="primary">
                        投稿する
                    </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
};
