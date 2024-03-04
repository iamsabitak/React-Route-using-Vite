function About() {
  return (
    <div className="container-fluid py-5 about-background">
      <div className="container">
        <h2 className="text-center mb-5">About Us</h2>
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBIzsyULZ3ZaZ2c9DgZb7EAgwiDhIUftt1zIFboVJgA&s"
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                arcu nisi. Curabitur ac leo eu libero elementum convallis nec
                eget velit. Proin consequat eros vel felis mattis, nec
                consectetur mauris finibus.
              </p>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; In aliquet turpis a urna maximus, nec
                elementum velit luctus. Maecenas nec nunc mi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
