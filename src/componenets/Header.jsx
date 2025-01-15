import Carousel from "./Carousel";

export default function Header() {
  return (
    <header className="header py-7 vh-100">
      <div className="container">
        <div className="row mb-5 text-center">
          <div className="col-12 text-container">
            <h1 className="display-2 text-white mt-3">
              Explore Our Training and Seminar Videos
            </h1>
            <p className="lead text-white w-75 m-auto mb-4">
              Whether you're a beginner or an experienced professional, our
              carefully curated content will empower you to enhance your skills
              and expand your knowledge
            </p>
            <a href="#register" className="btn btn-primary text-uppercase">
              Register
            </a>
            <a
              href="#discover"
              className="btn btn-outline-light text-white text-uppercase"
            >
              Discover
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel />
          </div>
        </div>
      </div>
    </header>
  );
}
