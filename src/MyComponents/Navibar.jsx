import { useState } from "react";
import "../CSS/Navbar.css";

function NaviBar() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const views = 1000;

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">Portfolio</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#certificate">Certificate</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>

          {/* Right Icons */}
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
            <li className="nav-item d-flex align-items-center">
              <button className={`btn p-0 btn-like ${liked ? "liked" : ""}`} onClick={handleLike}>
                {liked ? <i className="bi bi-heart-fill text-danger"></i> : <i className="bi bi-heart text-danger"></i>}
              </button>
              <span className="ms-2">{likes}</span>
            </li>
            <li className="nav-item d-flex align-items-center">
              <i className="bi bi-eye-fill"></i>
              <span className="ms-2">{views}</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NaviBar;
