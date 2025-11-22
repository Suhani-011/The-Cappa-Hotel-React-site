const Footer = () => {
  return (
    <div>
      <footer className="position-relative">
        <div className="footer-top position-relative">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-column mb-30 footer-about">
                  <h3 className="footer-title">About Hotel</h3>
                  <p className="footer-about-text">Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.</p>
                  <div className="footer-language"> 
                    <i className="ri-global-line" />
                    <select onchange="location = this.value;">
                      <option>English</option>
                      <option>German</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-3 offset-md-1">
                <div className="footer-column footer-explore clearfix">
                  <h3 className="footer-title">Explore</h3>
                  <ul className="footer-explore-list list-unstyled">
                    <li className="pt-2"><a>Home</a></li>
                    <li className="pt-2"><a>Rooms &amp; Suites</a></li>
                    <li className="pt-2"><a>Restaurant</a></li>
                    <li className="pt-2"><a>Spa &amp; Wellness</a></li>
                    <li className="pt-2"><a>About Hotel</a></li>
                    <li className="pt-2"><a> Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-column footer-contact mb-30 position-relative">
                  <h3 className="footer-title">Contact</h3>
                  <p className="footer-contact-text">1616 Broadway NY, New York 10001
                    <br />United States of America
                  </p>
                  <div className="footer-contact-info">
                    <p className="footer-contact-phone m-0">
                      <img src="./src/assets/images/call.png" alt="call" /> 855 100 4444
                    </p>
                    <p className="footer-contact-mail m-0">info@mountainhotel.com</p>
                  </div>
                  <div className="footer-about-social-list d-flex align-items-center">
                    <a href="#"><i className="ri-instagram-line" /></a>
                    <a href="#"><i className="ri-twitter-x-line" /></a>
                    <a href="#"><i className="ri-youtube-line" /></a>
                    <a href="#"><i className="ri-facebook-circle-line" /></a>
                    <a href="#"><i className="ri-tiktok-line" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-bottom-inner position-relative d-block">
                  <p className="footer-bottom-copy-right m-0">© Copyright 2025 by <a href="#">DuruThemes.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer