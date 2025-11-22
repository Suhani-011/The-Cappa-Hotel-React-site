const Service_box = ({name,content,btn}) => {
  return (
    <div className="services-content">
        <div className="cont text-left ">
            <h4>{name}</h4>
            <p>{content}</p>
            <div className="services-btn position-relative d-inline-block"> 
                <span className="position-relative z-2">{btn}</span> 
            </div>
        </div>
    </div>
  )
}

export default Service_box