import { NavLink, Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
  return (
    <div className="navbar">
      <NavLink to="/" className="title">Chirps</NavLink>
      <Link to="/add" className="add">Add New</Link>
    </div>
  )
}

export default Nav;
