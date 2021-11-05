import Home from "./pages/home/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import RegisterPatient from "./pages/formPatient/RegisterPatient";
import LoginPatient from "./pages/formPatient/LoginPatient";
import RegisterDoctor from "./pages/formDoctor/RegisterDoctor";
import LoginDoctor from "./pages/formDoctor/LoginDoctor";
import PatientDashboard from "./pages/Patient Dashboard/PatientDashboard";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/RegisterPatient">
          <RegisterPatient />
        </Route>
        <Route path="/LoginPatient">
          <LoginPatient />
        </Route>
        <Route path="/RegisterDoctor">
          <RegisterDoctor />
        </Route>
        <Route path="/LoginDoctor">
          <LoginDoctor />
        </Route>
        <Route path="/patient">
          <PatientDashboard />
        </Route>
        {/* <Route path="/doctor">
          <NavbarDoctor />
        </Route> */}

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
