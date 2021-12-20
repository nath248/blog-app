import { useState, useEffect } from 'react'
import './EditPost.css'
import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getPost, updatePost } from '../../services/posts'

const EditPost = (props) => {

  let navigate = useNavigate()

  const [post, setPost] = useState({
    profilePic: '',
    name: '',
    status: '',
    comment: ''
  })

  let { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updatePost(id, post)
    navigate(`/posts/${id}`)
  }

  return (
    <Layout>
      <div className='post-edit'>
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Profile Pic'
              value={post.profilePic}
              name='profilePic'
              required
              onChange={handleChange}
            />
          <input
            className='input-name'
            placeholder='Name'
            value={post.name}
            name='name'
            required
            onChange={handleChange}
          />
          <input
            className='input-status'
            placeholder='Status'
            value={post.status}
            name='status'
            required
            onChange={handleChange}
          />
          <textarea
            className='textarea-comment'
            rows={5}
            cols={38}
            placeholder='Comment'
            value={post.comment}
            name='comment'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default EditPost;