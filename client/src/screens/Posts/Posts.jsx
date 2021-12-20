import { useState, useEffect } from "react"
import Post from "../../components/Post/Post"
import Layout from "../../components/Layout/Layout"
import { getPosts } from "../../services/posts"
import "./Posts.css"

function Posts(props) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const grabPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    grabPosts()
  }, [props.toggle])

  return (
    <div>
        <div className="posts-section">
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
        </div>
    </div>
  )
}

export default Posts;
