import React from 'react';
import './App.css';

import logo from './assets/logo-click-qi-white.svg';
import icon from './assets/ico-clickqi-white.svg';

function App() {
    return (
        <div className="container">
            <img src={logo} alt="Click Qi" style={ {'maxWidth': '200px'} }/>

            <div className="content">
                <p>
                    Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
                </p>

                <form>
                    <label htmlFor="email">e-mail</label>
                    <input type="email" id="e-mail" placeholder="Digite seu e-mail"/>

                    <button className="btn" type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default App;
