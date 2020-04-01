import React from 'react'
import classes from './SideBar.module.css'
import {NavLink} from 'react-router-dom'
import { GoBell } from 'react-icons/go'
import { GoAlert } from 'react-icons/go'
import { IoMdPersonAdd } from 'react-icons/io'
import { GoGraph } from 'react-icons/go'
import { FaSignal } from 'react-icons/fa'
import { GiWorld } from 'react-icons/gi'
import { IoIosPersonAdd } from 'react-icons/io'
import { IoIosSpeedometer } from 'react-icons/io'


function SideBar() {
    return (
        
        <aside className = {classes.sidebar}>
            
            <NavLink to="/home"><li ><GiWorld/>  Locations</li></NavLink>
            <NavLink to="/notifications"><li><GoBell/>  Notifications</li></NavLink>
            <NavLink to="/alerts"><li><GoAlert/>  Alerts</li></NavLink>
            <NavLink to="/dashboard"><li><IoIosSpeedometer/>  Dashboard</li></NavLink>
            <NavLink to="/resources"><li><IoIosPersonAdd/>  Resources</li></NavLink>
            <NavLink to="/attendence"><li><IoMdPersonAdd/>  Attendence</li></NavLink>
            <NavLink to="/device"><li><FaSignal/>  Device</li></NavLink>
            <NavLink to="/reports"><li><GoGraph/>  Reports</li></NavLink>
        </aside>
    )
}

export default SideBar
