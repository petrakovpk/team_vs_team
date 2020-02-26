import React from 'react';
import SearchSelection from '../SearchSelection/SearchSelection.js';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            heroes : [],
            radiantHero1 : '',
            direHero1 : ''
        };


    }

    componentDidMount() {
     const url = 'https://api.opendota.com/api/heroes'
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                    for (var i = 0; i < result.length; i++) {
                        this.state.heroes[i] = {key: result[i]['id'], value: result[i]['localized_name'], text: result[i]['localized_name']}
                    }

                }
            )
    }



    setRadiantHero1 = (childData) => {

        this.setState({radiantHero1: childData})

         this.getMatchResult()

}

    setDireHero1 = (childData) => {

            this.setState({direHero1: childData})

        this.getMatchResult()

    }


    getMatchResult() {


        const url = "https://go.rapidminer.com/am/api/deployments/6882a8a2-92c6-445c-932c-f5c2dd2a3d07"

        const post_r = JSON.stringify({
                radiant_hero_1_name: 'lina',
                radiant_hero_2_name: 'lina',
                radiant_hero_3_name: 'lina',
                radiant_hero_4_name: 'lina',
                radiant_hero_5_name: 'lina',
                dire_hero_1_name: 'lina',
                dire_hero_2_name: 'lina',
                dire_hero_3_name: 'lina',
                dire_hero_4_name: 'lina',
                dire_hero_5_name: 'lina'
            })

        const post_rr = "{ \"data\": [" + post_r + "]}"



        fetch(url,{
            method: 'POST',
            headers: {
      'Content-Type': 'application/json'
    },
            body: post_rr

            }


        ).then(res => res.json()).then(data => console.log(data))






    }




    render() {

        return (

        <div className="container-fluid">

            <div className="row my-auto">

                <div className="col-lg-2 offset-lg-3">

                    <SearchSelection heroes = {this.state.heroes} callbackFromParent={this.setRadiantHero1} />

                </div>

                <div className="col-lg-1">

                    <p>  </p>

                </div>

                <div className="col-lg-1">

                     <p>  </p>

                </div>

                <div className="col-lg-2">

                    <SearchSelection heroes = {this.state.heroes} callbackFromParent={this.setDireHero1}/>

                </div>


            </div>


        </div>)
    }

}

export default Home