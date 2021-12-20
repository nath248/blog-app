import "./Post.css"
import { Link } from "react-router-dom";

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
        <Link to="/posts/:id/edit" className="edit-button">Edit</Link>
      </div>
    </div>
  )
}

export default Post;