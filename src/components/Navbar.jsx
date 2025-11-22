import { useEffect, useState } from "react";
import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`position-relative ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={scrolled ? logoDark : logoLight}
              alt="logo"
              className="img-fluid logo-img"
            />
          </a>

          <span className="navbar-toggler border-0 text-white">
            <i class="ri-menu-fill"></i>
          </span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown position-relative">
                <a className="nav-link dropdown-toggle active" href="#">
                  HOME <i class="ri-arrow-down-s-line"></i>
                </a>
                <ul className="dropdown-menu-1">
                  <li><a className="dropdown-item active" href="#">Parallax Image</a></li>
                  <li><a className="dropdown-item" href="#">Slider</a></li>
                  <li><a className="dropdown-item" href="#">Video</a></li>
                  <li><a className="dropdown-item" href="#">Slideshow</a></li>
                  <li><a className="dropdown-item" href="#">Onepage</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">ABOUT</a></li>
              <li className="nav-item"><a className="nav-link" href="#">ROOMS</a></li>
              <li className="nav-item"><a className="nav-link" href="#">RESTAURANT</a></li>
              <li className="nav-item"><a className="nav-link" href="#">SPA</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#">
                  PAGES <i class="ri-arrow-down-s-line"></i>
                </a>
                <ul className="dropdown-menu-1">
                  <li><a className="dropdown-item" href="#">Services</a></li>
                  <li><a className="dropdown-item" href="#">Facilities</a></li>
                  <li><a className="dropdown-item" href="#">Gallery</a></li>
                  <li><a className="dropdown-item" href="#">Team</a></li>
                  <li><a className="dropdown-item" href="#">Pricing</a></li>
                  <li><a className="dropdown-item" href="#">F.A.Q's</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">NEWS</a></li>
              <li className="nav-item"><a className="nav-link" href="#">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
