const Blog_item = ({image,date,name,context}) => {
  return (
    <div>
        <div className="news-item position-relative overflow-hidden mb-30">
            <div className="position-relative overflow-hidden">
                <img src={image} alt={image} className="img-fluid news-img"/>
                <div className="date position-absolute d-inline-block">
                    <span className="d-block text-light">DEC</span> 
                    <span className="date-no d-block text-light py-2">0{date}</span>
                </div>
            </div>
            <div className="news-content">
                <span className="category-name">
                    {name}
                </span>
                <h5 className="category-context">{context}</h5>
            </div>
        </div>
    </div>
  )
}

export default Blog_item