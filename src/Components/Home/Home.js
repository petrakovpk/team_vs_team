import React from 'react';
import SearchSelection from './SearchSelection.js';
import './style.css';

const Home = ({strings})=> (

<div className="container-fluid">

    <div className="row my-auto">

        <div className="col-lg-2 offset-lg-3">

            <SearchSelection/>

        </div>

         <div className="col-lg-1">

        </div>

         <div className="col-lg-1">

        </div>

         <div className="col-lg-2">

            <SearchSelection/>

        </div>


    </div>


</div>


)

export default Home