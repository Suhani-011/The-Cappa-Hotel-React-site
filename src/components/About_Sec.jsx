import aboutImg from '../assets/images/about-img.jpg';
import signature from '../assets/images/signature-dark.svg';

const About_Sec = () => {
  return (
    <div>
        <section className="about-sec section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <div className="subtitle">SINCE 2007</div>
                            <div className="title">A Unique Mountain Hotel</div>
                            <p>Welcome to the best five-star deluxe hotel in New York. Hotel elemen sesue the aucan vestibulum aliquam justo in sapien rutrum in the fermen.</p>
                            <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the miss ligulation. Orci varius natoque penatibus et magnis sarturien monte nascete ridiculus in the miss nellentes drana duru fermen.</p>
                        </div>
                        <div className="about-bottom d-flex align-items-center">
                            <img src={signature} alt="img" className="img-fluid signature" />
                            <div className="about-name-wrapper">
                                <div className="about-name">Martin Norman</div>
                                <div className="about-rol">General Manager</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <div className="about-img position-relative">
                                <div className="img position-relative">
                                <img src={aboutImg} alt="img" className="img-fluid position-relative z-2" />
                                </div>
                            </div>
                            <div id="circle" className="d-xxl-block d-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 300 300">
                                    <defs>
                                    <path
                                        id="circlePath"
                                        d="M 150,150 m -60,0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
                                    />
                                    </defs>

                                    <circle cx="150" cy="100" r="75" fill="none" />
                                    <g>
                                    <use xlinkHref="#circlePath" fill="none" />
                                    <text fill="#91765a">
                                        <textPath xlinkHref="#circlePath">. the cappa . mountain hotel</textPath>
                                    </text>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="line-vr-section"></div>
    </div>
  )
}

export default About_Sec