import { useState, useEffect } from "react"

import Post from "../../components/Post/Post"
// import Layout from "../../components/Layout/Layout"
import { getPosts } from "../../services/posts"

function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const grabPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    grabPosts()
  }, [])

  return (
    <div>
      {
        posts.map(post => (
          <div>
            <img src={post.profilePic} alt="" />
            <h1>{post.name}</h1>
            <h2>{post.status}</h2>
            <p>{post.comment}</p>
          </div>

        ))
      }
    </div>
  )
}

export default Posts;
