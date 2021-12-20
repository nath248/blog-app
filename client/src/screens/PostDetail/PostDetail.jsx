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
      <div className='main-detail'>
      <div className="detail">
        <div className='name'>
          <img className="profile-pic" src={post.profilePic} alt={post.name} />
          <div className="name">{post.name}</div>
        </div>
        <div className='description'>
        <div className="status">{post.status}</div>
          <div className="comment">{post.comment}</div>
            <Link className="edit-button" to={`/posts/${post._id}/edit`}><button>Edit</button></Link>
            <button className="delete-button" onClick={handleClick}>Delete</button>
        </div>
        </div>
        </div>
    </Layout>
  )
}

export default PostDetail;
