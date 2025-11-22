import Service_box from "./Service_box";
import services1 from "../assets/images/services-1.jpg";
import services2 from "../assets/images/services-2.jpg";
import services3 from "../assets/images/services-3.jpg";

const Services_Sec = () => {
  return (
    <div>
      <section className="our-services section-padding bg-darkbrown">
        <div className="container">

          <div className="row">
            <div className="col-md-12 mb-30 text-center">
              <div className="subtitle">WHAT WE DO</div>
              <div className="title text-light">Our Services</div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 p-0">
              <div className="services-img position-relative overflow-hidden">
                <img src={services1} alt="img" className="img-fluid" />
              </div>
            </div>

            <div className="col-md-6 p-0 d-flex justify-content-center align-items-center">
              <div>
                <Service_box
                  name="Restaurant & Bar"
                  content="Restaurant inilla duiman at elit finibus viverra nec a lacus miss the nesun seneoice misuscipit non sagie the fermen ziverra tristiue duru the iviten onen nivami acsestion augue in the miss artine."
                  btn="Dining With Us"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 p-0 d-flex justify-content-center align-items-center">
              <div>
                <Service_box
                  name="Spa & Wellness"
                  content="Wellness inilla duiman at elit finibus viverra nec a lacus miss the nesuna seneoice misuscipit non sagie the fermen ziverra tristiue duru the iviten onen nivami acsestion augue in the miss artine."
                  btn="Discover More"
                />
              </div>
            </div>

            <div className="col-md-6 p-0">
              <div className="services-img position-relative overflow-hidden">
                <img src={services2} alt="img" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 p-0">
              <div className="services-img position-relative overflow-hidden">
                <img src={services3} alt="img" className="img-fluid" />
              </div>
            </div>

            <div className="col-md-6 p-0 d-flex justify-content-center align-items-center">
              <div>
                <Service_box
                  name="Fitness Center"
                  content="Fitness center inilla duiman at elit finibus viverra nec a lacus miss nesun seneoice misuscipit non sagie the fermen ziverra tristiue duru the iviten onen nivami acsestion augue in the miss artine."
                  btn="Learn More"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services_Sec;
