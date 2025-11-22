const Form = () => {
  return (
    <div>
        <div className='booking-box right-banner z-3'>
        <div>
            <div className="head-box">
                <h4>Hotel Booking Form</h4>
            </div>
            <div className="booking-inner position-relative">
                <form className="form1 clearfix">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="input-box position-relative">
                                <input type="date" className="form-control"placeholder="Check in" required/>
                                <i class="ri-calendar-line"></i>
                            </div>
                        </div>
                        <div className="col-md-12 mt-3">
                            <div className="input-box position-relative">
                                <input type="date" className="form-control"placeholder="Check Out" required/>
                                <i class="ri-calendar-line"></i>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="input-box position-relative">
                                <select name="" id="">
                                <option value="default">Adults</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                </select>
                                <i className="ri-arrow-down-s-line"></i>
                            </div>
                        </div>

                        <div className="col-md-6 mt-3">
                            <div className="input-box position-relative">
                                <select name="" id="">
                                <option value="default">Children</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                </select>
                                <i className="ri-arrow-down-s-line"></i>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <button type="submit" className="check-btn">Check Availability</button>
                        </div>
                  </div>
                </form>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Form