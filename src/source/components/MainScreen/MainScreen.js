import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Login from '../../screens/Login/Login'
import OtherScreen from '../OtherScreen/OtherScreen'
function MainScreen() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Login}/>
            <Route path='/home' component={OtherScreen}/>
        </BrowserRouter>
    )
}

export default MainScreen
