import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import { Navbar } from './app/Navbar'
import { PostList } from './features/posts/postList'
import { AddPost } from './features/posts/addPost'

function App() {
  return(
    <><React.Fragment>
      <Navbar />
      <AddPost/>
    </React.Fragment><Router>
        <Routes>
          <Route
            path='/'
            element={<PostList />} />
        </Routes>
      </Router></>
    

  )
}

export default App
