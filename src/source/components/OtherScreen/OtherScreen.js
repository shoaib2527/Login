import React, { Component }from 'react'
import Alerts from '../../screens/Alerts/Alerts'
import Dashboard from '../../screens/Dashboard/Dashboard'
import Device from '../../screens/Device/Device'
import Notifications from '../../screens/Notifications/Notifications'
import Resources from '../../screens/Resources/Resources'
import Attendence from '../../screens/Attendence/Attendence'
import Locations from '../../screens/Locations/Locations'
import Reports from '../../screens/Reports/Reports'
import {BrowserRouter,Route} from 'react-router-dom'
import TopBar from '../topbar/TopBar'
import SideBar from '../sidebar/SideBar'

export class OtherScreen extends Component {
    constructor(props) {
      super(props)
      this.state = {
         show:true,
         current : 'Location'
      }
    }
    
    clickhandle = ()=>{
      this.setState(prevState=>({
        show:!prevState.show, 
      }));
    }
      
  render() {
        let margin;
        let click = null;
  
        if(this.state.show){
          margin = {
            marginLeft : "240px"
          }
          click = <SideBar/>
        }
        else{
           margin = {marginLeft : "10px"}
        }
    
        return (
        <div> 
            <TopBar clickon={this.clickhandle}/>
            {click}
            <div style={margin}>
            <BrowserRouter>
                <Route path='/home' exact component={Locations}/>
                <Route path='/alerts' component={Alerts}/>
                <Route path='/reports' component={Reports}/>
                <Route path='/device' component={Device}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/attendence' component={Attendence}/>
                <Route path='/resources' component={Resources}/>
                <Route path='/notifications' component={Notifications}/>
            </BrowserRouter>
            </div>
        </div>
    );
}}

export default OtherScreen
