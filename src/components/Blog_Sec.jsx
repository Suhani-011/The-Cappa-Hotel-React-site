import Blog_item from "./Blog_item";

import news1 from "../assets/images/news-1.jpg";
import news2 from "../assets/images/news-2.jpg";
import news3 from "../assets/images/news-3.jpg";

const Blog_Sec = () => {
  return (
    <section className="blog-sec section-padding">
      <div className="container">
        
        <div className="row">
          <div className="col-md-12 mb-30 text-center">
            <div className="subtitle"><span>HOTEL BLOG</span></div>
            <div className="title">Latest News</div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">

          <div className="col-lg-4 col-md-6">
            <Blog_item
              image={news1}
              date="2"
              name="Restaurant"
              context="Modern Wooden Restaurants"
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <Blog_item
              image={news2}
              date="4"
              name="Spa"
              context="Benefits of Spa Treatments"
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <Blog_item
              image={news3}
              date="6"
              name="Bathrooms"
              context="Hotel Bathroom Collections"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog_Sec;
