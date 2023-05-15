import { configureStore } from '@reduxjs/toolkit'
import postsReducer, { Post }  from '../features/posts/postsSlice' 
import usersReducer from '../features/users/usersSlice'
//export type RootState = ReturnType<typeof postsReducer>
export interface RootState {
  posts:Post[], 
}

export default configureStore({
  reducer: {
    posts:postsReducer,
    users:usersReducer,

  }
})
