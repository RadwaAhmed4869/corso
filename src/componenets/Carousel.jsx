import slide1 from "../images/header-slide-1.jpg";
import slide2 from "../images/header-slide-2.jpg";
import slide3 from "../images/header-slide-3.jpg";

export default function Carousel() {
  return (
    <div id="slider" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#slider"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#slider"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#slider"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner rounded-5">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100 rounded-5" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100 rounded-5" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100 rounded-5" alt="Slide 3" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
