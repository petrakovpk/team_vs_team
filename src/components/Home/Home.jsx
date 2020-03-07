import React from 'react';
import SearchSelectionHero from './SearchSelectionHero/SearchSelectionHero.jsx';
import {connect} from "react-redux";
import SearchSelectionTeam from "./SearchSelectionTeam";



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


                }
            )
    }

    render() {

        const {
            radiantHero1_val,
            radiantHero2_val,
            radiantHero3_val,
            radiantHero4_val,
            radiantHero5_val,
            direHero1_val,
            direHero2_val,
            direHero3_val,
            direHero4_val,
            direHero5_val,
            radiantWinChance,
            direWinChance
        } = this.props;


        const teamsOptions = [

            {key: "navi", value: "navi", text: "navi"},

            {key: "vp", value: "vp", text: "virtuspro"},

            {key: "tr", value: "tr", text: "Team Radiant"}

            ]





        return (



        <div className="container-fluid">

            <div className="row my-auto">

                 <div className="col-lg-2 offset-lg-4">

                     <SearchSelectionTeam teamsOptions = {teamsOptions}/>

                </div>

                 <div className="col-lg-3 ">

                     <SearchSelectionTeam teamsOptions = {teamsOptions}/>

                </div>

            </div>

             <div className="row my-auto">

                 <div className="col-lg-1 offset-lg-5">

                     {radiantWinChance}

                </div>

                 <div className="col-lg-3 ">

                     {direWinChance}

                </div>

            </div>



            <div className="row my-auto">

                 <div className="col-lg-2 offset-lg-3">

                   <SearchSelectionHero heroesOptions = {this.state.heroes} hero_type = 'radiantHero1'/>

                </div>

                 <div className="col-lg-1 ">

                     {radiantHero1_val}

                </div>

                 <div className="col-lg-1 ">

                     {direHero1_val}

                </div>

                <div className="col-lg-2 ">

                   <SearchSelectionHero heroesOptions = {this.state.heroes} hero_type = 'direHero1'/>

                </div>

            </div>

            <div className="row my-auto">

                 <div className="col-lg-2 offset-lg-3">

                   <SearchSelectionHero heroesOptions = {this.state.heroes} hero_type = 'radiantHero2'/>

                </div>

                 <div className="col-lg-1">

                      {radiantHero2_val}


                </div>

                 <div className="col-lg-1 ">

                     {direHero2_val}

                </div>

                <div className="col-lg-2 ">

                   <SearchSelectionHero heroesOptions = {this.state.heroes} hero_type = 'direHero2'/>

                </div>

            </div>

            <div className="row my-auto">

                 <div className="col-lg-2 offset-lg-3">

                   <SearchSelectionHero heroesOptions = {this.state.heroes} hero_type = 'radiantHero3'/>

                </div>

                 <div className="col-lg-1 ">

                      {radiantHero3_val}


                </div>

                 <div className="col-lg-1 ">

                     {direHero3_val}

                </div>

                <div className="col-lg-2 ">

                   <SearchSelectionHero heroesOptions = {this.state.heroes} hero_type = 'direHero3'/>

                </div>

            </div>

            <div className="row my-auto">

                 <div className="col-lg-2 offset-lg-3">

                   <SearchSelectionHero heroesOptions = {this.state.heroes} hero_type = 'radiantHero4'/>

                </div>

                 <div className="col-lg-1 ">

                      {radiantHero4_val}


                </div>

                 <div className="col-lg-1 ">

                     {direHero4_val}

                </div>

                <div className="col-lg-2 ">

                   <SearchSelectionHero heroesOptions = {this.state.heroes} hero_type = 'direHero4'/>

                </div>

            </div>

            <div className="row my-auto">

                 <div className="col-lg-2 offset-lg-3">

                   <SearchSelectionHero heroesOptions = {this.state.heroes} hero_type = 'radiantHero5'/>

                </div>

                 <div className="col-lg-1">

                      {radiantHero5_val}


                </div>

                 <div className="col-lg-1 ">

                     {direHero5_val}

                </div>

                <div className="col-lg-2 ">

                   <SearchSelectionHero heroesOptions = {this.state.heroes} hero_type = 'direHero5'/>

                </div>

            </div>




        </div>)
    }

}

const mapStateToProps = (state) => {
    return {

        radiantHero1_val: state.setHeroesValReducer.radiantHero1_val,
        radiantHero2_val: state.setHeroesValReducer.radiantHero2_val,
        radiantHero3_val: state.setHeroesValReducer.radiantHero3_val,
        radiantHero4_val: state.setHeroesValReducer.radiantHero4_val,
        radiantHero5_val: state.setHeroesValReducer.radiantHero5_val,
        direHero1_val: state.setHeroesValReducer.direHero1_val,
        direHero2_val: state.setHeroesValReducer.direHero2_val,
        direHero3_val: state.setHeroesValReducer.direHero3_val,
        direHero4_val: state.setHeroesValReducer.direHero4_val,
        direHero5_val: state.setHeroesValReducer.direHero5_val,
        radiantWinChance: state.setHeroesValReducer.radiantWinChance,
        direWinChance: state.setHeroesValReducer.direWinChance


    }
}


export default connect(mapStateToProps)(Home)
