const Home = () => {
  return (
    <div className="container-fluid py-5 home-background">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h2 className="mb-4">Welcome to Our Website</h2>
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
          <div className="col-md-6">
            <img
              src="https://media.istockphoto.com/id/1312128591/vector/home-icon-vector-house-sign.jpg?s=612x612&w=0&k=20&c=jxUT546g8Cfgv1SiAfh2Eos46XI3DqYvPLhxGFaobpE="
              alt="Welcome Image"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
