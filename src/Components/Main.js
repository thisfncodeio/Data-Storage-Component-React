import React, { Component } from 'react';
import Icons from './Icons';
import logo from '../Media/logo.svg';

class Main extends Component {
    render() {
        return (
            <div className="main-div">
                <img src={logo} alt="logo" id="logo" />
                <Icons />
            </div>
        )
    }
}

export default Main;
