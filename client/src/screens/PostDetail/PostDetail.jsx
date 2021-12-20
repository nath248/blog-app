import { useState, useEffect } from 'react'
import './PostDetail.css'
import Layout from '../../components/Layout/Layout'
import { getPost, deletePost } from '../../services/posts'
import { useParams, useNavigate, Link } from 'react-router-dom'

function PostDetail() {
  
  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  const nav = useNavigate();

  useEffect(() => {
      const fetchPost = async () => {
          const post = await getPost(id)
          setPost(post)
          setLoaded(true)
      }
      fetchPost()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  const handleClick = () => {
    deletePost(post._id)
    nav("/posts")
  }

  return (
    <Layout>                
      <div className="detail">
          <img className="profile-pic" src={post.profilePic} alt={post.name} />
          <div className="name">{post.name}</div>
          <div className="status">{post.status}</div>
          <div className="comment">{post.comment}</div>
          <div className="button-container">
              <button className="edit-button"><Link className="edit-link" to={`/posts/${post._id}/edit`}>Edit</Link></button>
              <button className="delete-button" onClick={handleClick}>Delete</button>
          </div>
      </div>
    </Layout>
  )
}

export default PostDetail;
