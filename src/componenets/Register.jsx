import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Register() {
  return (
    <section className="bg-primary">
      <div className="container">
        <div className="row py-6">
          <div className="col-lg-6">
            <div className="text-container">
              <h2>Unlock Your Potential with Engaging Content</h2>
              <p>
                Our wide range of training and seminar videos are designed to
                empower you with valuable knowledge and skills.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <FontAwesomeIcon icon={faSquare} />
                  <strong> Gain Expertise:</strong> Our videos provide in-depth
                  insights and practical tips to enhance your expertise in
                  various domains.
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faSquare} />
                  <strong> Stay Updated:</strong> Stay up-to-date with the
                  latest industry trends and advancements through our
                  informative and up-to-date videos.
                </li>
                <li>
                  <FontAwesomeIcon icon={faSquare} />
                  <strong> Expand Your Network:</strong> Connect with
                  like-minded individuals and industry experts, fostering new
                  connections and opportunities.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <form>
              <div className="my-4">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg rounded-0 border-0"
                  placeholder="Enter name"
                />
              </div>
              <div className="my-4">
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg rounded-0 border-0"
                  placeholder="Enter email"
                />
              </div>
              <div className="my-4">
                <input
                  type="number"
                  name="phone-number"
                  className="form-control form-control-lg rounded-0 border-0"
                  placeholder="Enter phone number"
                />
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  I agree to the terms and conditions
                </label>
              </div>
              <div className="d-grid mt-4">
                <button class="btn btn-outline-dark">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
