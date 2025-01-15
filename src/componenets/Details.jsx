import instructorImg from "../images/instructor.jpg";

export default function Details() {
  return (
    <section>
      <div className="container">
        <div className="row py-6">
          <div className="col-lg-6">
            <div className="image-container">
              <img
                src={instructorImg}
                alt="Instructor photo"
                className="rounded-5 img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-container">
              <h2>Enhance Your Skills with Engaging Training Videos</h2>
              <p>
                Our extensive collection of training videos is designed to help
                you enhance your skills and excel in your chosen field. Whether
                you're looking to improve your technical expertise or develop
                essential soft skills, our videos provide valuable insights and
                practical knowledge.
              </p>
              <p>
                With expert instructors and comprehensive content, you'll gain
                the confidence and competence to tackle challenges and achieve
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
