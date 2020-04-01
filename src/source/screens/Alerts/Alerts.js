import React,{Component} from 'react'
import {NavLink } from 'react-router-dom'
import { IoMdHome } from 'react-icons/io'
import TopBar from '../../components/topbar/TopBar'
import SideBar from '../../components/sidebar/SideBar'
class Alerts extends Component {
        constructor(props) {
            super(props)
            this.state = {
               show:true,
               current : 'Location',
               login : 'show'
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
                  marginLeft : '240px',
                  color: '#9c8773',
                height : '30px',
                width : '98%',
                padding : '5px',
                boxSizing : "border-box",
                backgroundColor : 'WhiteSmoke',
                marginTop : '20px',
                marginRight : '10px',
                }
                click = <SideBar/>
              }
              else{
                 margin = {
                    color: '#9c8773',
                    height : '30px',
                    width : '98%',
                    padding : '5px',
                    boxSizing : "border-box",
                    backgroundColor : 'WhiteSmoke',
                    marginTop : '20px',
                    marginRight : '10px',
                     marginLeft : "10px"
                    }
              }
          
             
        return (
            <div>
                <TopBar onClick={this.clickhandle} />
                {click}
            <div style={margin}><IoMdHome/><NavLink style={{color:'brown'}} to="/">Home </NavLink>/  Resources</div>
            <NavLink to='/Alerts'><h1  style={margin }>Alert...</h1></NavLink>
        </div>
    );
}}

export default Alerts
