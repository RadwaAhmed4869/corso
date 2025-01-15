import instructorImg from "../images/instructor.jpg";

export default function Details() {
  return (
    <section id="discover" className="details py-6 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={instructorImg}
              alt="Instructor photo"
              className="rounded-5 img-fluid mb-4"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>Enhance Your Skills with Engaging Training Videos</h2>
            <p>
              Our extensive collection of training videos is designed to help
              you enhance your skills and excel in your chosen field. Whether
              you're looking to improve your technical expertise or develop
              essential soft skills, our videos provide valuable insights and
              practical knowledge.
            </p>
            <p>
              With expert instructors and comprehensive content, you'll gain the
              confidence and competence to tackle challenges and achieve
              success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
