import React, { Component } from "react";
import Login from "./screens/Login/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Alerts from "./screens/Alerts/Alerts";
import Notifications from "./screens/Notifications/Notifications";
import Resources from "./screens/Resources/Resources";
import Attendence from "./screens/Attendence/Attendence";
import Dashboard from "./screens/Dashboard/Dashboard";
import Device from "./screens/Device/Device";
import Reports from "./screens/Reports/Reports";
import Locations from "./screens/Locations/Locations";

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
