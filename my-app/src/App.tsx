import React from 'react'
import {
  Route,
  Routes,
} from 'react-router-dom'
import { Navbar } from './app/Navbar'
import { PostList } from './features/posts/postList'
import { AddPost } from './features/posts/addPost'
import { PostDetail } from './features/posts/postDetail'
import { EditPost } from './features/posts/editPost'


function App() {
  return(
    <><React.Fragment>
    <Navbar />
    <AddPost />
    </React.Fragment>
        <Routes>
          <Route
            path=''
            element={<PostList />} />
        <Route
            path='/posts/:postId'
            element={<PostDetail />} />
                    <Route path='/posts/edit/:postId'
               element={<EditPost/>}></Route>
        </Routes>

</>
    

  )
}

export default App
