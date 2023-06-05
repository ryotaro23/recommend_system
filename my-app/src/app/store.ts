import { configureStore } from '@reduxjs/toolkit'
import postsReducer, { Post }  from '../features/posts/postsSlice' 
import usersReducer, { User } from '../features/users/usersSlice'
//export type RootState = ReturnType<typeof postsReducer>
export interface RootState {
  posts:Post[], 
  users:User[]
}

export default configureStore({
  reducer: {
    posts:postsReducer,
    users:usersReducer,

  }
})
