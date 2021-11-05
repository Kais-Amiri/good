import React from "react";
import logo from "../../image/home images/stethoscope.svg";
import * as AiIcons from "react-icons/ai";

function Navbar() {
  return (
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
                className="nav-link text-dark d-flex align-items-center"
                aria-current="page"
                href="#home"
              >
                <AiIcons.AiFillPhone className="iconNav" />
                <h6 className="navbarTitle">+00216 99999999</h6>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-dark d-flex align-items-center"
                aria-current="page"
                href="#home"
              >
                <AiIcons.AiFillMail className="iconNav" />
                <h6 className="navbarTitle">contact@good.com</h6>
              </a>
            </li>

            <li className="nav-item mx-1">
              <a className="nav-link" href="#services">
                <AiIcons.AiFillFacebook className="iconNav" />
              </a>
            </li>
            <li className="nav-item mx-1">
              <a className="nav-link" href="#services">
                <AiIcons.AiFillTwitterSquare className="iconNav" />
              </a>
            </li>
            <li className="nav-item mx-1">
              <a className="nav-link" href="#services">
                <AiIcons.AiFillLinkedin className="iconNav" />
              </a>
            </li>
          </ul>

          <button className=" mb-3 mb-md-0 mx-2 btn_signout">SIGN OUT</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
