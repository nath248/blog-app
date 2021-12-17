import './App.css';
import Home from "./screens/Home/Home"
import Posts from "./screens/Posts/Posts"
import CreatePost from './screens/CreatePost/CreatePost'
// import EditPost from "./screens/EditPost"
import { Route, Routes } from 'react-router-dom'
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts toggle={toggle} />} />
        <Route path="/add" element={<CreatePost setToggle={setToggle}/>} />
        <Route path="/posts/:id/edit" element={<h2>Edit</h2>} />
      </Routes>
    </div>
  );
}

export default App;
