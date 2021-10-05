import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/stethoscope.svg";
import doctor1 from "../../image/doctor7.png";
import rating from "../../image/rating.svg";
import service from "../../image/service-client.svg";
import shield from "../../image/shield.svg";
import doctor5 from "../../image/doctor5.png";
import doctor9 from "../../image/doctor9.png";
import doctor6 from "../../image/doctor6.png";
import pic1 from "../../image/serviceImages/calendar.svg";
import pic2 from "../../image/serviceImages/chat.svg";
import pic3 from "../../image/serviceImages/medical-report.svg";
import pic4 from "../../image/serviceImages/call.svg";
import pic5 from "../../image/serviceImages/delivry.svg";
import pic6 from "../../image/serviceImages/certificate.svg";
import Carousel from "react-bootstrap/Carousel";
import linkedin from "../../image/contact/linkedin.svg";
import facebook from "../../image/contact/facebook.svg";
import twitter from "../../image/contact/twitter.svg";

function Home() {
  return (
    <div>
      {/*---------------------------------navbar-----------------------------------------------*/}

      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
        <div className="container-fluid bg-light py-2  py-lg-0 px-5">
          <a
            className="navbar-brand d-flex flex-row align-items-start"
            href="#home"
            style={{ color: "#05c5fa" }}
          >
            <img
              src={logo}
              style={{
                width: "40px",
                height: "50px",
                paddingTop: "10px",
                paddingRight: "0px",
                transform: "rotateY(180deg)",
              }}
            />
            <p style={{ fontSize: "1.8rem", paddingLeft: "0px" }}>ood</p>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav px-5">
              <li className="nav-item mx-2">
                <a
                  className="nav-link text-dark"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-dark" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-dark" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <Link to="/LoginPatient">
              <button
                className="mb-3 mb-md-0 mx-2"
                style={{
                  width: "12rem",
                  height: "auto",
                  border: "1px solid #05c5fa",
                  backgroundColor: "#05c5fa",
                  color: "#ffffff",
                  padding: "8px 25px 8px 25px",
                }}
              >
                Sign in as patient
              </button>
            </Link>
            <Link to="/LoginDoctor">
              <button
                style={{
                  width: "10rem",
                  height: "auto",
                  border: "1px solid #05c5fa",
                  backgroundColor: "#ffffff",
                  color: "#05c5fa",
                  padding: "8px 25px 8px 25px",
                }}
              >
                Sign in as doctor
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {/*------------End of the navbar ------------------------------*/}
      {/*------------ begining of the first bloc --------------------*/}

      <div
        className=" container-fluid mt-5"
        id="home"
        style={{ backgroundColor: "#0d6178", borderRadius: "0 0 50px 50px" }}
      >
        <div
          className="row py-5 pt-md-3 pb-md-0 justify-content-center"
          style={{ width: "100%", height: "auto" }}
        >
          <div className="col-10 col-md-6 align-self-center order-2 order-md-1">
            <h1 className="display-3 text-start text-light mt-0 mt-md-5 mt-lg-0">
              Never Hesitate to Consult with Doctor
            </h1>
            <h4 className=" text-start text-light">
              we are disponible 24/7, consult a doctor from your home without
              any effort
            </h4>
            <div className="d-grid gap-2 d-md-block text-start">
              <Link to="/RegisterPatient">
                <button
                  className="btn btn-lg m-md-2 rounded-0 btn-light btn-outline-dark"
                  style={{
                    border: "1px solid #05c5fa",
                    color: "#05c5fa",
                  }}
                  type="button"
                >
                  Create a Patient Account
                </button>
              </Link>
              <Link to="/RegisterDoctor">
                <button
                  className="btn btn-lg m-md-2 rounded-0  btn-outline-dark"
                  style={{
                    border: "1px solid #ffffff",
                    color: "#ffffff",
                  }}
                  type="button"
                >
                  Create a Doctor Account
                </button>
              </Link>
            </div>
          </div>
          {/*------------ image in the first bloc -------------------------- */}
          <div className="col-10 col-md-5 my-5 my-md-0 align-self-center pt-1 order-1 order-md-2">
            <img
              className="img-fluid rounded h-md-100 mx-2 "
              src={doctor1}
              style={{
                borderRadius: "0 0 2.8em 2.8em",
                boxShadow: "0 0 0 2em #639dad",
                backgroundColor: "#ffffff",
              }}
            />
          </div>
        </div>
      </div>
      {/*---------------------end of the first bloc------------------------- */}
      {/*------------------------ begining of the second section ( about us)----------------- */}
      <div
        className="container-fluid py-5"
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: "linear-gradient(to top,#d1f7ff  0%, #ffffff 100%)",
        }}
      >
        <div className="row d-flex justify-content-center py-2 py-md-5">
          <div className="col-10  col-md-8 col-lg-6">
            <div className=" text-center">
              <h4>Why you should trust us ?</h4>
              <h4 className="display-6">GET TO KNOWN ABOUT US</h4>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-8">
            <div className="row d-flex justify-content-center ">
              <div className="col-10 col-sm-7 col-md-4">
                <div className="card border-0 px-3 py-4 mt-2 mt-md-0">
                  <div className="card-body text-center">
                    <img
                      className="card-title"
                      src={shield}
                      style={{ width: "30%" }}
                    />
                    <h4>Private and Secure</h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-7 col-md-4">
                <div className="card border-0 px-3 py-4 mt-2 mt-md-0">
                  <div className="card-body text-center">
                    <img
                      className="card-title"
                      src={service}
                      style={{ width: "30%" }}
                    />
                    <h4>24/7 Support</h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-7 col-md-4">
                <div className="card border-0 px-3 py-4 mt-3 mt-md-0">
                  <div className="card-body text-center">
                    <img
                      className="card-title"
                      src={rating}
                      style={{ width: "30%" }}
                    />
                    <h4>Million Customers</h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-----------------end of the second section (about us)-------------------------- */}
      {/*------------------- begining of third bloc------------------------------------- */}
      <div
        className="container py-3 my-5"
        style={{
          width: "75%",
          height: "auto",
          borderRadius: "1%",
          backgroundColor: "#05c5fa",
        }}
      >
        <div className="row">
          <div className="col-12 col-md-5 col-lg-6 align-self-center ">
            <h3 className="text-light display-6 mx-3">
              Subscribe Now, and get a free consultation
            </h3>
          </div>
          <div className="col-12 col-md-3 col-lg-2 align-self-center">
            <Link to="RegisterPatient">
              <button
                className="btn btn-lg rounded-0 btn-light btn-outline-dark"
                style={{
                  border: "1px solid #05c5fa",
                  color: "#05c5fa",
                }}
                type="button"
              >
                Register Now
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-4 align-self-center ">
            <img className="img-fluid" src={doctor5} />
          </div>
        </div>
      </div>

      {/*----------------------------- the fourth bloc (our serveces)--------------- */}
      <div
        className="container p-2 mb-5"
        style={{ width: "100%", height: "auto" }}
        id="services"
      >
        <div className="row  justify-content-center ">
          <div className="col-lg-6 col-md-8 col-10 mb-4 ">
            <h4 className="display-6">OUR SERVICES</h4>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 col-md-5 col-lg-3 m-2">
            <div className="card border-1 px-3 py-4">
              <div className="card-body text-center">
                <img
                  className="card-title"
                  src={pic1}
                  style={{ width: "30%" }}
                />
                <h4>Booking Appointment</h4>
              </div>
            </div>
          </div>
          <div className="col-8 col-md-5 col-lg-3 m-2">
            <div className="card border-1 px-3 py-4">
              <div className="card-body text-center">
                <img
                  className="card-title"
                  src={pic2}
                  style={{ width: "30%" }}
                />
                <h4>Chat with Doctors</h4>
              </div>
            </div>
          </div>
          <div className="col-8 col-md-5  col-lg-3 m-2 h-100">
            <div className="card border-1 px-3 py-4">
              <div className="card-body text-center">
                <img
                  className="card-title"
                  src={pic4}
                  style={{ width: "30%" }}
                />
                <h4>Online Call</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 col-md-5  col-lg-3 m-2">
            <div className="card border-1 px-3 py-4">
              <div className="card-body text-center">
                <img
                  className="card-title"
                  src={pic3}
                  style={{ width: "30%" }}
                />
                <h4>Health Diagnostics</h4>
              </div>
            </div>
          </div>
          <div className="col-8 col-md-5  col-lg-3 m-2">
            <div className="card border-1 px-3 py-4">
              <div className="card-body text-center">
                <img
                  className="card-title"
                  src={pic5}
                  style={{ width: "30%" }}
                />
                <h4>Medics Delivery</h4>
              </div>
            </div>
          </div>
          <div className="col-8 col-md-5  col-lg-3 m-2">
            <div className="card border-1 px-3 py-4">
              <div className="card-body text-center">
                <img
                  className="card-title"
                  src={pic6}
                  style={{ width: "30%" }}
                />
                <h4>Certified Doctors</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-2">
          <div className="col-7 col-md-4 ">
            <Link to="/RegisterPatient">
              <button
                className="btn m-md-2 rounded-0 px-5 btn-outline-dark"
                style={{
                  border: "1px solid #05c5fa",
                  color: "#05c5fa",
                }}
                type="button"
              >
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/*----------------------- end of the fourth bloc (our services)-------------- */}
      {/*----------------------------- begining of the staff section ------------------------------*/}
      <div
        className="container-fluid pt-4"
        style={{ backgroundColor: "#0d6178" }}
      >
        <div className="row justify-content-center">
          <Carousel
            className="col-12"
            style={{ height: "auto", overflow: "hidden" }}
          >
            <Carousel.Item>
              <img className="img-fluid" src={doctor1} alt="First slide" />
              <Carousel.Caption>
                <h3 className="text-dark">First slide label</h3>
                <h4>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image-fluid" src={doctor9} alt="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={doctor6} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <h4>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/*-----------------------------begining of contact section --------------------------------*/}
      <div
        className="container-fluid  mt-5 pt-5"
        style={{
          height: "auto",
          backgroundColor: "#f2fcff",
          borderTop: "4px solid #639dad",
        }}
        id="contact"
      >
        <div className="row justify-content-center pb-4">
          <div className="col-10 col-md-4 col-lg-3 mx-5">
            <div className="d-flex">
              <img
                src={logo}
                style={{
                  width: "40px",
                  height: "50px",
                  paddingTop: "10px",
                  paddingRight: "0px",
                  transform: "rotateY(180deg)",
                }}
              />
              <p
                style={{
                  fontSize: "1.8rem",
                  paddingLeft: "0px",
                  color: "#05c5fa",
                }}
              >
                ood
              </p>
            </div>
            <p className="text-start">
              GOOD, an e-health platform that allows patients to consult a
              doctor online 24/7 in complete security and confidentiality
            </p>
          </div>
          <div className="col-10 col-md-3 d-flex flex-md-column text-start">
            <div className="mx-2">
              <h5 className="mt-2">Adress</h5>
              <p>Tunis, Tunisia</p>
            </div>
            <div className="mx-2">
              <h5 className="mt-2 mt-md-1">Phone</h5>
              <p>+216 99999999</p>
            </div>
          </div>
          <div className="col-6 col-md-2 align-self-center">
            <a>
              <img src={facebook} style={{ width: "20%", margin: "3px" }} />
            </a>
            <a>
              <img src={twitter} style={{ width: "20%", margin: "3px" }} />
            </a>
            <a>
              <img src={linkedin} style={{ width: "20%", margin: "3px" }} />
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-6 col-lg-3 ">
            <h6>Copyright 2021 All Right Reserved By Kais Amiri</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
