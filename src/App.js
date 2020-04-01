import React, { Component } from "react";
import Login from "./source/screens/Login/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Alerts from "./source/screens/Alerts/Alerts";
import Notifications from "./source/screens/Notifications/Notifications";
import Resources from "./source/screens/Resources/Resources";
import Attendence from "./source/screens/Attendence/Attendence";
import Dashboard from "./source/screens/Dashboard/Dashboard";
import Device from "./source/screens/Device/Device";
import Reports from "./source/screens/Reports/Reports";
import Locations from "./source/screens/Locations/Locations";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Locations} />
            <Route path="/alerts" component={Alerts} />
            <Route path="/reports" component={Reports} />
            <Route path="/device" component={Device} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/attendence" component={Attendence} />
            <Route path="/resources" component={Resources} />
            <Route path="/notifications" component={Notifications} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
