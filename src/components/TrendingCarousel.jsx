import React from "react";
import { Carousel } from "react-bootstrap";

const TrendingCarousel = () => {
  return (
    <div>
      <h3 className="text-white ms-5 mt-4 mb-4">Trending Now</h3>
      <Carousel interval={null} indicators={false} className="ms-4">
        <Carousel.Item>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-xxl-6 justify-content-center gap-2">
            <div className="col">
              <img src="./assets/media/media0.webp" className="d-block" alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media1.jpg" className="d-block" alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media2.webp" className="d-block" alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media3.webp" className="d-block" alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media4.jpg" className="d-block" alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media5.webp" className="d-block" alt="..." />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-xxl-6 justify-content-center gap-2">
            <div className="col">
              <img src="./assets/media/media6.jpg" className="d-block" alt="..." />
            </div>

            <div className="col">
              <img src="./assets/media/media7.webp" className="d-block" alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media8.webp" className="d-block" alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media9.jpg" className="d-block" alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media10.jpg" className="d-block" alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media11.jpg" className="d-block" alt="..." />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TrendingCarousel;
