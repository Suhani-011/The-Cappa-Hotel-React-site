import Box from "./Box";

import worldIcon from "../assets/images/003-world.png";
import carIcon from "../assets/images/004-car.png";
import bedIcon from "../assets/images/002-double-bed.png";
import swimIcon from "../assets/images/005-swimming.png";
import wifiIcon from "../assets/images/001-wi-fi-icon.png";
import breakfastIcon from "../assets/images/006-breakfast.png";

const Facilities = () => {
  return (
    <div>
      <section className="facilities-sec section-padding">
        <div className="container">

          <div className="row">
            <div className="col-md-12 mb-30 text-center">
              <div className="subtitle">HOTEL FACILITIES</div>
              <div className="title">Why Choose Us</div>
            </div>
          </div>

          <div className="row">

            <div className="col-lg-4 col-md-6">
              <Box
                image={worldIcon}
                name="Pick Up & Drop"
                context="We’ll pick up from airport while you comfy on your ride, mus nellentun miss."
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <Box
                image={carIcon}
                name="Parking Space"
                context="Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant."
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <Box
                image={bedIcon}
                name="Room Service"
                context="Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant."
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <Box
                image={swimIcon}
                name="Swimming Pool"
                context="Swimming pool tincidunt nise ace park norttito sit space the mus nellentes."
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <Box
                image={wifiIcon}
                name="Fibre Internet"
                context="Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitan."
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <Box
                image={breakfastIcon}
                name="Breakfast"
                context="Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitan."
              />
            </div>

          </div>
        </div>
      </section>

      <div className="line-vr-section"></div>
    </div>
  );
};

export default Facilities;
