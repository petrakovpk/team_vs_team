import React from 'react';
import SearchSelection from '../SearchSelection/SearchSelection.jsx';
import HeroChoosen from '../HeroChoosen/HeroChoosen.jsx';


import {connect} from "react-redux";
import {changeRadiantHero1} from "../../actions/setHero";
import {bindActionCreators} from 'redux'


class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            heroes: [],
        }

    }

    componentDidMount() {
     const url = 'https://api.opendota.com/api/heroes'
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                    for (var i = 0; i < result.length; i++) {
                        this.state.heroes[i] = {key: result[i]['id'], value: result[i]['name'].substring(14, ), text: result[i]['localized_name']}

                    }

                    console.log(this.state.heroes)

                }
            )
    }

    render() {

        return (

        <div className="container-fluid">



            <div className="row my-auto">

                 <div className="col-lg-2 offset-lg-3">

                   <SearchSelection heroesOptions = {this.state.heroes} hero_type = 'radiantHero1'/>

                </div>

                 <div className="col-lg-2 ">


                </div>

                <div className="col-lg-2 ">

                   <SearchSelection heroesOptions = {this.state.heroes} hero_type = 'direHero1'/>

                </div>

            </div>

            <div className="row my-auto">

                 <div className="col-lg-2 offset-lg-3">

                   <SearchSelection heroesOptions = {this.state.heroes} hero_type = 'radiantHero2'/>

                </div>

                 <div className="col-lg-2 ">


                </div>

                <div className="col-lg-2 ">

                   <SearchSelection heroesOptions = {this.state.heroes} hero_type = 'direHero2'/>

                </div>

            </div>

            <div className="row my-auto">

                 <div className="col-lg-2 offset-lg-3">

                   <SearchSelection heroesOptions = {this.state.heroes} hero_type = 'radiantHero3'/>

                </div>

                 <div className="col-lg-2 ">


                </div>

                <div className="col-lg-2 ">

                   <SearchSelection heroesOptions = {this.state.heroes} hero_type = 'direHero3'/>

                </div>

            </div>

            <div className="row my-auto">

                 <div className="col-lg-2 offset-lg-3">

                   <SearchSelection heroesOptions = {this.state.heroes} hero_type = 'radiantHero4'/>

                </div>

                 <div className="col-lg-2 ">


                </div>

                <div className="col-lg-2 ">

                   <SearchSelection heroesOptions = {this.state.heroes} hero_type = 'direHero4'/>

                </div>

            </div>

            <div className="row my-auto">

                 <div className="col-lg-2 offset-lg-3">

                   <SearchSelection heroesOptions = {this.state.heroes} hero_type = 'radiantHero5'/>

                </div>

                 <div className="col-lg-2 ">


                </div>

                <div className="col-lg-2 ">

                   <SearchSelection heroesOptions = {this.state.heroes} hero_type = 'direHero5'/>

                </div>

            </div>

            <div className="row my-auto">

                 <div className="col-lg-1 offset-lg-5">

                     80

                </div>

                 <div className="col-lg-3 ">

                     70

                </div>

            </div>


        </div>)
    }

}


export default Home
