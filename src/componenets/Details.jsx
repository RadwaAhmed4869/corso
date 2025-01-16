import instructorImg from "../images/instructor.jpg";
import audienceImg from "../images/audience.jpg";

const DETAILS = [
  {
    image: instructorImg,
    header: "Enhance Your Skills with Engaging Training Videos",
    paragraph1:
      "Our extensive collection of training videos is designed to help you enhance your skills and excel in your chosen field. Whether you're looking to improve your technical expertise or develop essential soft skills, our videos provide valuable insights and practical knowledge.",
    paragraph2:
      "With expert instructors and comprehensive content, you'll gain the confidence and competence to tackle challenges and achieve success.",
  },
  {
    image: audienceImg,
    header: "Elevate Your Learning Journey with Expert Seminars",
    paragraph1:
      "Join our expert-led seminars and unlock new possibilities in your personal and professional development. Our seminars cover a diverse range of topics, from leadership and innovation to personal growth and productivity.",
    paragraph2:
      "Immerse yourself in engaging discussions, interactive workshops, and valuable networking opportunities.",
  },
];

export default function Details({ index }) {
  let sectionId = index === 0 ? "discover" : "";
  return (
    <section id={sectionId} className="details py-6 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={DETAILS[index].image}
              alt="Instructor photo"
              className="rounded-5 img-fluid mb-4"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>{DETAILS[index].header}</h2>
            <p>{DETAILS[index].paragraph1}</p>
            <p>{DETAILS[index].paragraph2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
