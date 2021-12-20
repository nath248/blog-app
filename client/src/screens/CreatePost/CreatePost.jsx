import { useState, useEffect } from 'react'
import { createPost } from '../../services/posts'
import { useNavigate, useParams } from 'react-router-dom'

export default function Form(props) {
  const [profilePic, setProfilePic] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [comment, setComment] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const foundPost = props.posts?.find(post => {
      return post.id === params.id
    })
    if (foundPost) {
      setProfilePic(foundPost.profilePic)
      setName(foundPost.name)
      setStatus(foundPost.status)
      setComment(foundPost.comment)
    }
  }, [params.id, props.posts])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      profilePic,
      name,
      status,
      comment
    }
    const response = await createPost(newPost)
    props.setToggle(prevToggle => !prevToggle)
    if (response) {
      navigate('/')
    }
}
return (
  <form onSubmit={handleSubmit} className="newpro">
    <h2>New Profile</h2>
    <p>Profile Pic:</p>
    <input
      type='text'
      value={profilePic}
      name='profilePic:'
      onChange={(e) => setProfilePic(e.target.value)}
    />
    <p>Name:</p>
    <input
      type='text'
      value={name}
      name='name'
      onChange={(e) => setName(e.target.value)}
    />
    <p>Status:</p>
    <input
      type='text'
      value={status}
      name='status'
      onChange={(e) => setStatus(e.target.value)}
    />
    <p>Your comment:</p>
    <input
      type='text'
      value={comment}
      name='comment'
      onChange={(e) => setComment(e.target.value)}
    />
    
    <br />
    <button>Submit :D</button>
  </form>
  )
}