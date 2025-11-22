const Box = ({ image, name, context }) => {
  return (
    <div>
      <div className="single-facility">
        <div className="facility-icon">
          <img src={image} alt={name} className="img-fluid" />
        </div>
        <h5>{name}</h5>
        <p>{context}</p>
        <div className="facility-shape">
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Box;
