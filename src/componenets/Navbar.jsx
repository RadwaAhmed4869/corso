import logoImg from "../images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <div className="container">
        <a href="index.html" className="navbar-brand">
          <img src={logoImg} alt="Corso logo" width="150" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#discover">
                Discover
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#summary">
                Summary
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#takeaways">
                Takeaways
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#subscribe">
                Subscribe
              </a>
            </li>
          </ul>
          <span className="nav-item ms-lg-4 me-4">
            <span className="fa-layers fa-fw">
              <a href="#">
                <FontAwesomeIcon icon={faCircle} size="2x" />
                <FontAwesomeIcon
                  icon={faFacebookF}
                  color={"white"}
                  size="1x"
                  className="ps-2"
                />
              </a>
            </span>
          </span>
          <span className="nav-item">
            <span className="fa-layers fa-fw">
              <a href="#">
                <FontAwesomeIcon icon={faCircle} size="2x" />
                <FontAwesomeIcon
                  icon={faTwitter}
                  color={"white"}
                  size="1x"
                  className="ps-2"
                />
              </a>
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
}
