import React from "react";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import Image3 from "../images/image4.jpg";
import Image4 from "../images/image3.jpg";
import Image5 from "../images/image9.jpg";
import Image6 from "../images/image8.jpg";
import Image7 from "../images/image6.jpg";

function Home ()
{
  return (
    <div className="container-fluid  bg-success">
      <div className="row ">
        <div className="col section1 ">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item  active">
                <img src={Image1} className="d-block  w-100 myimage" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants">
                    <button className="bg-danger welcomeBtn">
                      <i className="fa fa-handshake-o" aria-hidden="true"></i>{" "}
                      WELCOME
                    </button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Image2} className="d-block  w-100 myimage" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants">
                    <button className="bg-danger welcomeBtn">
                      <i className="fa fa-handshake-o" aria-hidden="true"></i>{" "}
                      WELCOME
                    </button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Image3} className="d-block  w-100 myimage" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants">
                    <button className="bg-danger welcomeBtn">
                      <i className="fa fa-handshake-o" aria-hidden="true"></i>{" "}
                      WELCOME
                    </button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Image4} className="d-block  w-100 myimage" alt="..." />
                WELCOME
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants">
                    <button className="bg-danger welcomeBtn">
                      <i className="fa fa-handshake-o" aria-hidden="true"></i>{" "}
                      WELCOME
                    </button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Image5} className="d-block  w-100 myimage" alt="..." />
                WELCOME
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants">
                    <button className="bg-danger welcomeBtn">
                      <i className="fa fa-handshake-o" aria-hidden="true"></i>{" "}
                      WELCOME
                    </button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Image6} className="d-block  w-100 myimage" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants">
                    <button className="bg-danger welcomeBtn">
                      <i className="fa fa-handshake-o" aria-hidden="true"></i>{" "}
                      WELCOME
                    </button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Image7} className="d-block  w-100 myimage" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants">
                    <button className="bg-danger welcomeBtn">
                      <i className="fa fa-handshake-o" aria-hidden="true"></i>{" "}
                      WELCOME
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-target="#carouselExampleCaptions"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-target="#carouselExampleCaptions"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="cards container ">
        <div className="card col-md-4">
          <h4 className="card-header  text-center bg-transparent">
            Featured Restaurant
          </h4>
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
            className="card-img-top secttwoimages"
            alt="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNvdHRvY2FzYSUyMG55YyUyMHBpenphJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
          />
          <div className="card-body">
            <h5>Sottocasa NYC</h5>
            <p className="card-text">298 Atlantic Ave, Brooklyn, NY 11201</p>
          </div>
        </div>
        <div className="card col-md-4">
          <h4 className="card-header  text-center bg-transparent">
            Featured Restaurant
          </h4>
          <img
            src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNvdHRvY2FzYSUyMG55YyUyMHBpenphJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
            className="card-img-top secttwoimages"
            alt="..."
          />
          <div className="card-body">
            <h5>PizzArte</h5>
            <p className="card-text">69 W 55th St, New York, NY 10019</p>
          </div>
        </div>
        <div className="card col-md-4">
          <h4 className="card-header text-center bg-transparent">
            Featured Restaurant
          </h4>
          <img
            src="https://images.unsplash.com/photo-1474898856510-884a2c0be546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvdHRvY2FzYSUyMG55YyUyMHBpenphJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
            className="card-img-top secttwoimages"
            alt="..."
          />
          <div className="card-body">
            <h5>San Matteo NYC</h5>
            <p className="card-text">1559 2nd Ave, New York, NY 10028</p>
          </div>
        </div>
      </div>

      {/* <div>
        <h2 className="text-center mt-4 ">Featured Restaurants</h2>
      </div>
      <div className="row container mt-3 secttwo ">
        <div className="col-md-6 bg-light text-black secttwo1">
          <Headline headline={headline} />
        </div>
        <div className="col-md-6 bg-light text-black secttwo2">
          <Headline headline={headline} />
        </div>
      </div> */}
    </div>
  );
}

export default Home;
