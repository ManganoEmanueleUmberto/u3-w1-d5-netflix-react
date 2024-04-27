const MyFooter = () => {
  return (
    <footer>
      <div className="container-md d-flex justify-content-center mt-5">
        <div className="w-50">
          <div className="d-flex gap-5 ms-2">
            <i className="bi bi-facebook text-secondary"></i>
            <i className="bi bi-instagram text-secondary"></i>
            <i className="bi bi-twitter text-secondary"></i>
            <i className="bi bi-youtube text-secondary"></i>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 text-secondary mt-4">
            <div className="col">
              <p>Audio and Subtitles</p>
            </div>
            <div className="col">
              <p>Audio Description</p>
            </div>
            <div className="col">
              <p>Help Center</p>
            </div>
            <div className="col">
              <p>Gift Cards</p>
            </div>
            <div className="col">
              <p>Media Center</p>
            </div>
            <div className="col">
              <p>Investor Relation</p>
            </div>
            <div className="col">
              <p>Jobs</p>
            </div>
            <div className="col">
              <p>Terms of use</p>
            </div>
            <div className="col">
              <p>Privacy</p>
            </div>
            <div className="col">
              <p>Legal Notice</p>
            </div>
            <div className="col">
              <p>Cookie Preferences</p>
            </div>
            <div className="col">
              <p>Corporate Information</p>
            </div>
            <div className="col">
              <p>Contact Us</p>
            </div>
          </div>

          <button className="btn btn-outline-secondary">Service Code</button>
          <p className="text-secondary mt-4">&copy; 1997-2019 Netflix, Inc. &#10100; i-0d00fcda2fdf9c0de &#10101;</p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
