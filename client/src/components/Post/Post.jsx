import "./Post.css"

function Post(props) {
  return (
    <div>
      <img src={props.profilePic} alt={props._id} />
      <h3>{props.name}</h3>
      <p>{props.status}</p>
      <p>{props.comment}</p>
    </div>
  )
}

export default Post;