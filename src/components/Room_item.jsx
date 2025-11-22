const Room_item = ({image,name,price}) => {
  return (
    <div>
        <div class="item position-relative mb-30 overflow-hidden">
            <div class="position-relative overflow-hidden">
                <img src={image} alt="img" class="img-fluid"/>
            </div>
            <span class="category">
                <a href="">Book</a>
            </span>
            <div class="con">
                <h6><a href="">{price}$/NIGHT</a></h6>
                <h5><a href="">{name}</a></h5>
                <div class="row facilities">
                    <div class="col col-md-7">
                        <ul>
                            <li><i class="ri-hotel-bed-line"></i></li>
                            <li><i class="ri-restaurant-line"></i></li>
                            <li><i class="ri-t-shirt-line"></i></li>
                        </ul>
                    </div>
                    <div class="col col-md-5 text-end">
                        <div class="permalink">
                            <a href="">Details
                            <i class="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Room_item