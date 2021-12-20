import "./Post.css"

function Post(props) {
  return (
    <div className="post-box-info">
      <div className="post-name">
        <img src={props.profilePic} alt={props._id} />
        <h3>{props.name}</h3>
      </div>
      <div className="post-description">
        <p>{props.status}</p>
        <p>{props.comment}</p>
      </div>
    </div>
  )
}

export default Post;