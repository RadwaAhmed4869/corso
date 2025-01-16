import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="footer mt-4 text-bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Lorem Ipsum</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              possimus aliquid omnis commodi. Dignissimos, quam obcaecati? Fugit
              non ex repellendus?
            </p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className=" list-unstyled">
              <li>
                <a href="#" className="link-underline link-underline-opacity-0">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#discover"
                  className="link-underline link-underline-opacity-0"
                >
                  Discover
                </a>
              </li>
              <li>
                <a
                  href="#summary"
                  className="link-underline link-underline-opacity-0"
                >
                  Summary
                </a>
              </li>
              <li>
                <a
                  href="#takeaways"
                  className="link-underline link-underline-opacity-0"
                >
                  Takeaways
                </a>
              </li>
              <li>
                <a
                  href="#subscribe"
                  className="link-underline link-underline-opacity-0"
                >
                  Subscribe
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect</h5>
            <div className="social-icons d-flex gap-3">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} size="3x" color="white" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} size="3x" color="white" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} size="3x" color="white" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} size="3x" color="white" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} size="3x" color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
