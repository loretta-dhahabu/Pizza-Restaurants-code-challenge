import React from "react";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import Image3 from "../images/image4.jpg";
import Image4 from "../images/image3.jpg";
import Image5 from "../images/image9.jpg";
import Image6 from "../images/image8.jpg";
import Image7 from "../images/image6.jpg";

function Home() {
  return (
    <div className="container-fluid vh-100 bg-success">
      <div className="row ">
        <div className="col section1 bg-primary">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item d-flex justify-center align-center active">
                <img src={Image1} class="d-block myimage w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants"><button className="bg-danger welcomeBtn">
                    <i class="fa fa-handshake-o" aria-hidden="true"></i> WELCOME
                  </button></a>
                </div>
              </div>
              <div class="carousel-item d-flex justify-center align-center">
                <img src={Image2} class="d-block myimage w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants"><button className="bg-danger welcomeBtn">
                    <i class="fa fa-handshake-o" aria-hidden="true"></i> WELCOME
                  </button></a>
                </div>
              </div>
              <div class="carousel-item d-flex justify-center align-center">
                <img src={Image3} class="d-block myimage w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants"><button className="bg-danger welcomeBtn">
                    <i class="fa fa-handshake-o" aria-hidden="true"></i> WELCOME
                  </button></a>
                </div>
              </div>
              <div class="carousel-item d-flex justify-center align-center">
                <img src={Image4} class="d-block myimage w-100" alt="..." />
                WELCOME
                <div class="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants"><button className="bg-danger welcomeBtn">
                    <i class="fa fa-handshake-o" aria-hidden="true"></i> WELCOME
                  </button></a>
                </div>
              </div>
              <div class="carousel-item d-flex justify-center align-center">
                <img src={Image5} class="d-block myimage w-100" alt="..." />
                WELCOME
                <div class="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants"><button className="bg-danger welcomeBtn">
                    <i class="fa fa-handshake-o" aria-hidden="true"></i> WELCOME
                  </button></a>
                </div>
              </div>
              <div class="carousel-item d-flex justify-center align-center">
                <img src={Image6} class="d-block myimage w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants"><button className="bg-danger welcomeBtn">
                    <i class="fa fa-handshake-o" aria-hidden="true"></i> WELCOME
                  </button></a>
                </div>
              </div>
              <div class="carousel-item d-flex justify-center align-center">
                <img src={Image7} class="d-block myimage w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className="notes">Welcome To Pizza Restaurants</h5>
                  <a href="/restaurants"><button className="bg-danger welcomeBtn">
                    <i class="fa fa-handshake-o" aria-hidden="true"></i> WELCOME
                  </button></a>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-target="#carouselExampleCaptions"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-target="#carouselExampleCaptions"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row container my-5">
        <h1>Featured Restaurants</h1>
        <div className="col-md-6 bg-danger ">image1</div>
        <div className="col-md-6 bg-warning ">image2</div>
      </div>
    </div>
  );
}

export default Home;
