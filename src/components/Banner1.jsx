import Form from './Form'

const Banner1 = () => {
  return (
    <div>
        <div className="banner-header">
            <div className="container">
              <div className='row'>
                <div className="col-lg-7">
                  <div>
                    <div className="left-banner z-3 position-relative">
                      <h4>Unparalled Beauty</h4>
                      <h3>A Unique Mountain Hotel</h3>
                      <div class="home-btn position-relative">
                        <a href="">
                          <span className='z-2 position-relative'>Rooms & Suites</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 d-lg-block d-none">
                  <Form/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner1