import React from "react";
import { Carousel } from "react-bootstrap";

const WatchItCarousel = () => {
  return (
    <div className="">
      <h3 className="text-white ms-5 mt-5 mb-4">Watch It Again</h3>
      <Carousel interval={null} indicators={false} className="ms-4">
        <Carousel.Item>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-xxl-6 justify-content-center gap-2">
            <div className="col">
              <img src="./assets/media/media12.jpg" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media13.jpg" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media29.jpg" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media14.webp" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media15.jpg" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media16.webp" className="d-block " alt="..." />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-xxl-6 justify-content-center gap-2">
            <div className="col">
              <img src="./assets/media/media17.jpg" className="d-block " alt="..." />
            </div>

            <div className="col">
              <img src="./assets/media/media18.jpg" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media19.webp" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media20.jpg" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media21.webp" className="d-block " alt="..." />
            </div>
            <div className="col">
              <img src="./assets/media/media22.webp" className="d-block " alt="..." />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default WatchItCarousel;
