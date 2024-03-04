const Services=()=> {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://p7.hiclipart.com/preview/337/513/284/password-manager-privacy-policy-password-strength-random-password-generator-service.jpg"
              height="300px"
              className="card-img-top"
              alt="Service 1"
            />
            <div className="card-body">
              <h5 className="card-title">Service 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget enim in lectus convallis tempus.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKY9K_lb8olBs1-CHaGJx_DMOpJBuTc_7GIsKhgpToGSszLpnSfIdPG9CDS9SzgUcjW2E&usqp=CAU"
              height="300px"
              className="card-img-top"
              alt="Service 2"
            />
            <div className="card-body">
              <h5 className="card-title">Service 2</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget enim in lectus convallis tempus.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxggn3n_VnHanqYquI4yc5fQe9TclfT5-QCLq60ZNLS9q70YwtaWYkWtc04acYPBPv7s&usqp=CAU"
              className="card-img-top"
              alt="Service 3"
              height="300px"
            />
            <div className="card-body">
              <h5 className="card-title">Service 3</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget enim in lectus convallis tempus.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
