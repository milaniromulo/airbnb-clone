import React from 'react';
import './App.css';

import Routes from './routes'

import logo from './assets/logo-click-qi-white.svg';
// import icon from './assets/ico-clickqi-white.svg';

function App() {
    return (
        <div className="container">
            <img src={logo} alt="Click Qi" style={ {'maxWidth': '200px'} }/>

            <div className="content">
                <Routes/>
            </div>
        </div>
    );
}

export default App;
