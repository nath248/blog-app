import './App.css';
// import Home from "./screens/Home"
import Posts from "./screens/Posts/Posts"
import CreatePost from './screens/CreatePost/CreatePost'
// import EditPost from "./screens/EditPost"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/add" element={<CreatePost />} />
        <Route path="/posts/:id/edit" element={<h2>Edit</h2>} />
      </Routes>
    </div>
  );
}

export default App;
