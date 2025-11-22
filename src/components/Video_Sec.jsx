const Video_Sec = () => {
  return (
    <div>
        <section className="position-relative video-sec section-padding">
          <div className="container position-relative z-2">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center mb-2">
                <div>
                  <div className="stars mb-2 d-flex justify-content-center align-items-center">
                    <i className="ri-star-s-fill" />
                    <i className="ri-star-s-fill" />
                    <i className="ri-star-s-fill" />
                    <i className="ri-star-s-fill" />
                    <i className="ri-star-s-fill" />
                  </div>
                  <div className="subtitle text-light">
                    MOUNTAIN HOTEL
                  </div>
                  <div className="title text-light">
                    Promotional Video
                  </div>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <div>
                  <a className="vid position-relative" href="https://youtu.be/7BGNAGahig8">
                    <div className="vid-btn d-flex justify-content-center"> 
                      <div className="icon d-flex justify-content-center align-items-center">
                        <i className="ri-play-large-line" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="line-vr-section"></div>
    </div>
  )
}

export default Video_Sec