import React from "react";
import { Carousel } from "react-bootstrap";

const NewRealeasesCarousel = () => {
  return (
    <div>
      <h3 className="text-white ms-5 mt-5 mb-4">New Releases</h3>
      <Carousel interval={null} indicators={false} className="ms-4">
        <Carousel.Item>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-xxl-6 justify-content-center gap-2">
            <div className="col">
              <img src="./assets/media/media23.webp" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media24.jpg" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media25.webp" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media26.webp" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media27.jpg" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media28.jpg" className="d-block " alt="..." />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-xxl-6 justify-content-center gap-2">
            <div className="col">
              <img src="./assets/media/media29.jpg" className="d-block " alt="..." />
            </div>

            <div className="col">
              <img src="./assets/media/media30.jpg" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media31.webp" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media32.jpg" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media10.jpg" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media11.jpg" className="d-block " alt="..." />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default NewRealeasesCarousel;
