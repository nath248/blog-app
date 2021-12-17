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
      {/* <Layout>
        
      </Layout> */}
      <h1>hello</h1>
    </div>
  )
}

export default Posts;
