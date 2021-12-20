import './App.css';
import Home from "./screens/Home/Home"
import Posts from "./screens/Posts/Posts"
import CreatePost from './screens/CreatePost/CreatePost'
import EditPost from "./screens/EditPost/EditPost"
import { Route, Routes } from 'react-router-dom'
import { useState } from "react";
import PostDetail from './screens/PostDetail/PostDetail';

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts toggle={toggle} />} />
        <Route path="/add" element={<CreatePost setToggle={setToggle}/>} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
