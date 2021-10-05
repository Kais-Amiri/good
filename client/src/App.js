import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./components/home/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import RegisterPatient from "./components/formPatient/RegisterPatient";
import LoginPatient from "./components/formPatient/LoginPatient";
import RegisterDoctor from "./components/formDoctor/RegisterDoctor";
import LoginDoctor from "./components/formDoctor/LoginDoctor";
import NavbarDoctor from "./components/sideBarDoctor/NavbarDoctor";
import NavbarPatient from "./components/sideBarPatient/NavbarPatient";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/RegisterPatient">
          <RegisterPatient />
        </Route>
        <Route exact path="/LoginPatient">
          <LoginPatient />
        </Route>
        <Route exact path="/RegisterDoctor">
          <RegisterDoctor />
        </Route>
        <Route exact path="/LoginDoctor">
          <LoginDoctor />
        </Route>
        <Route exact path="/patient">
          <NavbarPatient />
        </Route>
        <Route path="/doctor">
          <NavbarDoctor />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
