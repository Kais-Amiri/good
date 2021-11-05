import React from "react";
import { Link } from "react-router-dom";
import background from "../../image/register login/doctorsRegister.png";

function LoginDoctor() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        // backgroundImage: "linear-gradient(to top, #0d6178 0%, #ffffff 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="container h-100">
        <div className="row d-flex align-items-center h-100 justify-content-center ">
          <div className="col-10 col-md-6 col-lg-4 bg-light border rounded border-dark p-5 ">
            <Link to="/" className="text-start text-danger">
              <h6>Home</h6>
            </Link>
            <h2>LOGIN - DOCTOR</h2>
            <form className="text-start mt-4">
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
              <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-primary py-2 px-5 mt-2 mt-lg-4">
                  Sign in
                </button>
                <Link
                  className="mx-2 text-danger align-self-end"
                  to="/RegisterDoctor"
                >
                  <h6>Create an account</h6>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginDoctor;
