import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';
import NavBar from '../components/Navbar/Navbar';

class Layout extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <Switch>
                    <Route path = "/" exact component = {Home}/>
                    <Route path = "/contact" component = {Contact}/>
                    <Route path = "/about" component = {About}/>
                    <Route render = {() => <h1>ERROR 404<br/>Page Not Found</h1>}/>
                </Switch>
            </div>
        )
    }
}

export default Layout;