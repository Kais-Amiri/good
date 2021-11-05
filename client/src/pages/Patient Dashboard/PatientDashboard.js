import React from "react";
import "./style.css";
import { SidebarData } from "./sidebarData";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import UserCardProfile from "../../components/userCardProfile/UserCardProfile";
import Navbar from "../../components/navbar/Navbar";
import Articles from "../articles/Articles";
import NotFound from "../notFound/NotFound";

function PatientDashboard() {
  const { path, url } = useRouteMatch();

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <div
          className="row"
          style={{
            marginTop: "10%",
          }}
        >
          <div
            className="col-11 col-md-9 col-lg-10"
            style={{ border: "1px solid black" }}
          >
            <Switch>
              <Route exact path={`${path}`}>
                <Articles />
              </Route>
              <Route exact path={`${path}/doctors`}>
                <h1>doctors</h1>
              </Route>
              <Route exact path={`${path}/appointments`}>
                <h1>appointments</h1>
              </Route>
              <Route exact path={`${path}/MedicalPrescription`}>
                <h1>medical prescription</h1>
              </Route>
              <Route exact path={`${path}/profile`}>
                <h1>profile</h1>
              </Route>
              <Route exact path={`${path}/support`}>
                <h1>support</h1>
              </Route>
              <Route>
                <NotFound path="*" />
              </Route>
            </Switch>
          </div>
          <UserCardProfile />
        </div>
      </div>
      {/*--------------------------- sidebar section -------------------------------- */}

      <nav className="main-menu">
        {SidebarData.map((item, index) => {
          return (
            <Link className="link" to={`${url}${item.path}`} key={index}>
              {item.icon}
              <h6 className="navTitle">{item.title}</h6>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default PatientDashboard;
