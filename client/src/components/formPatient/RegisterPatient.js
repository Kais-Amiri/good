import React from "react";
import { Link } from "react-router-dom";
import background from "../../image/register/patientsRegister.jpg";
// import background from "../../image/background/cool-background.png";

function RegisterPatient() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        // backgroundImage: "linear-gradient(to top, #05c5fa 0%, #ffffff 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="container h-100">
        <div className="row align-items-center h-100 justify-content-center">
          <div className="col-10  col-md-8 col-lg-5 bg-light  border border-dark rounded px-5 py-3 py-sm-3 py-lg-4">
            <Link to="/" className="text-start text-danger">
              <h6>Home</h6>
            </Link>
            <h3 className="mb-2">REGISTER - PATIENT</h3>
            <form className="text-start">
              <div className="form-group mb-2">
                <label className="" for="firstname">
                  FirstName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Enter firstname"
                />
              </div>
              <div className="form-group mb-2">
                <label className="" for="lastname">
                  LastName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Enter lastname"
                />
              </div>

              <div className="form-group mb-2">
                <label for="inputAge">Age</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputAge"
                  placeholder="Age...."
                />
              </div>

              <div className="form-group mb-2">
                <label for="inputPhone">Phone number</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPhone"
                  placeholder="+216..."
                />
              </div>
              <div className="form-group mb-2">
                <label className="" for="exampleInputEmail1">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mb-2">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary py-2 px-5 mt-2 mt-lg-4"
                >
                  Sign up
                </button>
                <Link
                  className="mx-2 text-danger align-self-end"
                  to="/LoginPatient"
                >
                  <h6>I have an account</h6>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPatient;
