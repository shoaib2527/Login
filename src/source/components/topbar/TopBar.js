import React from 'react'
import classes from './TopBar.module.css'
import { GoAlert } from 'react-icons/go'
import { GiWorld } from 'react-icons/gi'
import { GoBell } from 'react-icons/go'
import { GoPerson } from 'react-icons/go'
function TopBar(props) {
    return (
        <div className={classes.main}>
            <div className={classes.image}>
            <div className={classes.button} onClick={props.onClick}>
            <div className={classes.line}>
            </div>
            <div className={classes.line}>
            </div>
            <div className={classes.line}>
            </div>
            </div>
            <img src="/Capture.PNG" onClick={props.clickon} alt="Logo"></img>
            </div>
            <div className={classes.logo}>
                {/* <div className={classes.space} style={{flexBasis: '200px'}} >
                <GiWorld color='white'   /><span>Pinmicro Innovation Center</span>
                </div> */}
                <div className={classes.space}>
                <GoAlert color='white'/>
                </div>
                <div className={classes.space}>
                <GoBell color='white'/>
                </div>
                <div className={classes.space} style={{flexBasis : '100px'}}>
                <GoPerson color='white' /><span>Demo User</span> 
                </div>
            </div>
        </div>
    )
}

export default TopBar
