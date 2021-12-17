import { useState, useEffect } from "react"
import Post from "../../components/Post/Post"
import Layout from "../../components/Layout/Layout"
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
      <Layout>
        {posts.map((post, index) => {
          return (
            <Post id={post._id}
              name={post.name}
              profilePic={post.profilePic}
              status={post.status}
              comment={post.comment}
              key={index}
            />
          )
        })
        }
      </Layout>
    </div>
  )
}

export default Posts;
