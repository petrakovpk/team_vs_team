import React from 'react';
import SearchSelection from './SearchSelectionHero/SearchSelection.js';
import getMatchResult from '../GetMLResults/AskRapidminer'

class Home extends React.Component {

    constructor(props){
        super(props);

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



    setRadiantHero1 = (childData) => {

        this.setState({radiantHero1: childData})

         this.getMatchResult()

    }
    setRadiantHero2 = (childData) => {

        this.setState({radiantHero2: childData})

         this.getMatchResult()

    }
    setRadiantHero3 = (childData) => {

        this.setState({radiantHero3: childData})

         this.getMatchResult()

    }
    setRadiantHero4 = (childData) => {

        this.setState({radiantHero4: childData})

         this.getMatchResult()

    }
    setRadiantHero5 = (childData) => {

        this.setState({radiantHero5: childData})

         this.getMatchResult()

    }

    setDireHero1 = (childData) => {

            this.setState({direHero1: childData})

        this.getMatchResult()

    }
    setDireHero2 = (childData) => {

            this.setState({direHero2: childData})

        this.getMatchResult()

    }
    setDireHero3 = (childData) => {

            this.setState({direHero3: childData})

        this.getMatchResult()

    }
    setDireHero4 = (childData) => {

            this.setState({direHero4: childData})

        this.getMatchResult()

    }
    setDireHero5 = (childData) => {

            this.setState({direHero5: childData})

        this.getMatchResult()

    }

     getIndex = (name) => {
      return this.state.contradict_prediction.hero.findIndex( function(hero){
          return hero === name
      } );
    }





    render() {

        return (

        <div className="container-fluid">

            <div className="row my-auto">

                 <div className="col-lg-1 offset-lg-5">

                     {this.state.confidence_true}

                </div>

                 <div className="col-lg-3 ">

                     {this.state.confidence_false}

                </div>

            </div>

            <div className="row my-auto">

                <div className="col-lg-2 offset-lg-3">

                    <SearchSelection heroes = {this.state.heroes} callbackFromParent={this.setRadiantHero1} />

                </div>

                <div className="col-lg-1">

                    <p> {this.state.radiantHero1_val} </p>

                </div>

                <div className="col-lg-1">

                     <p> {this.state.direHero1_val} </p>

                </div>

                <div className="col-lg-2">

                    <SearchSelection heroes = {this.state.heroes} callbackFromParent={this.setDireHero1}/>

                </div>

            </div>

            <div className="row my-auto">

                <div className="col-lg-2 offset-lg-3">

                    <SearchSelection heroes = {this.state.heroes} callbackFromParent={this.setRadiantHero2} />

                </div>

                <div className="col-lg-1">

                    <p> {this.state.radiantHero2_val} </p>

                </div>

                <div className="col-lg-1">

                     <p> {this.state.direHero2_val} </p>

                </div>

                <div className="col-lg-2">
                    <SearchSelection heroes = {this.state.heroes} callbackFromParent={this.setDireHero2} />


                </div>

            </div>

             <div className="row my-auto">

                <div className="col-lg-2 offset-lg-3">

                    <SearchSelection heroes = {this.state.heroes} callbackFromParent={this.setRadiantHero3} />

                </div>

                <div className="col-lg-1">

                    <p> {this.state.radiantHero3_val} </p>

                </div>

                <div className="col-lg-1">

                     <p> {this.state.direHero3_val} </p>

                </div>

                <div className="col-lg-2">

                    <SearchSelection heroes = {this.state.heroes} callbackFromParent={this.setDireHero3} />


                </div>

            </div>

             <div className="row my-auto">

                <div className="col-lg-2 offset-lg-3">

<SearchSelection heroes = {this.state.heroes} callbackFromParent={this.setRadiantHero4} />

                </div>

                <div className="col-lg-1">

                    <p> {this.state.radiantHero4_val} </p>

                </div>

                <div className="col-lg-1">

                     <p> {this.state.direHero4_val} </p>

                </div>

                <div className="col-lg-2">


                    <SearchSelection heroes = {this.state.heroes} callbackFromParent={this.setDireHero4} />


                </div>

            </div>

             <div className="row my-auto">

                <div className="col-lg-2 offset-lg-3">

<SearchSelection heroes = {this.state.heroes} callbackFromParent={this.setRadiantHero5} />

                </div>

                <div className="col-lg-1">

                    <p> {this.state.radiantHero5_val} </p>

                </div>

                <div className="col-lg-1">

                     <p> {this.state.direHero5_val} </p>

                </div>

                <div className="col-lg-2">

                    <SearchSelection heroes = {this.state.heroes} callbackFromParent={this.setDireHero5} />

                </div>

            </div>


        </div>)
    }

}

export default Home