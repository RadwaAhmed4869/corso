import {
  faAtom,
  faChartBar,
  faHandshake,
  faKey,
  faNewspaper,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KEYS = [
  {
    icon: faAtom,
    title: "Scientific Insights",
    text: "Explore the latest scientific research and gain valuable insights into various subjects, from physics to biology.",
  },
  {
    icon: faKey,
    title: "Cybersecurity Awareness",
    text: "Discover the importance of cybersecurity and learn how to protect yourself and your digital assets from cyber threats.",
  },
  {
    icon: faNewspaper,
    title: "Industry Updates",
    text: "Stay informed about the latest news and updates in your industry, keeping you ahead of the curve and facilitating professional growth.",
  },
  {
    icon: faUsers,
    title: "Collaborative Networking",
    text: "Connect with professionals from diverse backgrounds and industries to foster collaboration and expand your professional network.",
  },
  {
    icon: faHandshake,
    title: "Partnership Opportunities",
    text: "Discover potential partnership opportunities with like-minded individuals and organizations, opening doors to new collaborations and ventures.",
  },
  {
    icon: faChartBar,
    title: "Data-driven Insights",
    text: "Leverage data analytics to gain valuable insights and make informed decisions, unlocking new possibilities for growth and success.",
  },
];

export default function Takeaways() {
  return (
    <section id="takeaways" className="takeaways my-5 bg-light">
      <div className="container">
        <div className="row text-center mb-5">
          <div class="col-md-8 offset-md-2">
            <h2>Key Takeaways</h2>
            <p class="lead">
              Here are some of the takeaways and benefits you can expect from
              our programs.
            </p>
          </div>
        </div>
        <div className="row">
          {KEYS.map((item) => {
            return (
              <div className="col-md-4">
                <div className="card mb-4 rounded-0 border-0 p-3 bg-white">
                  <div className="card-body text-center">
                    <FontAwesomeIcon
                      icon={item.icon}
                      size="3x"
                      className="text-primary bg-light rounded-circle p-3 my-4"
                    />
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
