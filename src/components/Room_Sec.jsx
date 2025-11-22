import Room_item from "./Room_item";
import room1 from "../assets/images/01.jpg";
import room2 from "../assets/images/02.jpg";

const Room_Sec = () => {
  return (
    <div>
      <section className="rooms-sec section-padding bg-darkbrown">
        <div className="container">
          
          <div className="row">
            <div className="col-md-12 mb-30 text-center">
              <div className="subtitle">MOUNTAIN HOTEL</div>
              <div className="title">
                <span className="text-light">Rooms &amp; Suites</span>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-md-6">
              <Room_item
                image={room1}
                name="Junior Suite"
                price="150"
              />
            </div>

            <div className="col-md-6">
              <Room_item
                image={room2}
                name="Family Room"
                price="200"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Room_Sec;
