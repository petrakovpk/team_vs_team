import React from 'react';
import Home from "../Home";


const Navigation = ()=> (

    <div className="navbar navbar-light navbar-expand-md">

        <div className="container-fluid"><a className="navbar-brand" href="#">Dota 2 predict</a>
            <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span
                className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse"
                 id="navcol-1">
                <ul className="nav navbar-nav">
                    <li className="nav-item" role="presentation"><a className="nav-link active" href="#">Калькулятор персонажей</a>
                    </li>

                </ul>
            </div>
        </div>

    </div>
)

export default Navigation