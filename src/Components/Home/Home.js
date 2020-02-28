import React from 'react';
import SearchSelection from '../SearchSelection/SearchSelection.js';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            heroes : [],
            contradict_prediction : {hero: [], val: []} ,
            support_prediction_hero : [] ,
            support_prediction_val : [],
            radiantHero1 : '',
            radiantHero1_val :0,
            direHero1 : '',
            radiantHero2 : '',
            radiantHero2_val :0,
            direHero2 : '',
            radiantHero3 : '',
            radiantHero3_val :0,
            direHero3 : '',
            radiantHero4 : '',
            radiantHero4_val :0,
            direHero4 : '',
            radiantHero5 : '',
            radiantHero5_val :0,
            direHero5 : '',
            confidence_false : 0,
            confidence_true: 0,
            radiantScore1: 0,
            direScore1: 0,
        };


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

    setDireHero1 = (childData) => {

            this.setState({direHero1: childData})

        this.getMatchResult()

    }

     getIndex = (name) => {
      return this.state.contradict_prediction.hero.findIndex( function(hero){
          return hero === name
      } );
    }


    getMatchResult() {


        const url = "https://go.rapidminer.com/am/api/deployments/6882a8a2-92c6-445c-932c-f5c2dd2a3d07"

        const post_r = JSON.stringify({
                radiant_hero_1_name: this.state.radiantHero1 ,
                radiant_hero_2_name: 'lina',
                radiant_hero_3_name: 'lina',
                radiant_hero_4_name: 'lina',
                radiant_hero_5_name: 'lina',
                dire_hero_1_name: this.state.direHero1 ,
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


        ).then(res => res.json()).then((data) => {

                this.setState( {contradict_prediction : {hero: [], val: []}})


                const contradict_len = data['data'][0]['Contradict Prediction'].split(';').length;
                const contradict_arr = data['data'][0]['Contradict Prediction'].split(';');

                for (var i = 0; i < contradict_len; i++) {

                    const contradict_elem = contradict_arr[i].split("=").map(Function.prototype.call, String.prototype.trim)

                    const concat_array = {
                        hero: contradict_elem[0],
                        val: parseFloat(contradict_elem[1].split("(")[1].substr(0, 6), 10)

                    }


                    this.state.contradict_prediction.hero = this.state.contradict_prediction.hero.concat(concat_array.hero)
                    this.state.contradict_prediction.val = this.state.contradict_prediction.val.concat(concat_array.val)



                }



                console.log( this.state.contradict_prediction.hero )

                console.log( this.state.contradict_prediction.val[this.getIndex("radiant_hero_4_name")])




                const support_len = data['data'][0]['Support Prediction'].split(';').length;
                const support_arr = data['data'][0]['Support Prediction'].split(';')

                for (var i = 0; i < support_len; i++) {

                    const support_elem = support_arr[i].split("=").map(Function.prototype.call, String.prototype.trim)

                    this.setState({support_prediction_hero: this.state.support_prediction_hero.concat(support_elem[0])})

                    this.setState({
                        support_prediction_val: this.state.support_prediction_val.concat(
                            parseFloat(support_elem[1].split("(")[1].substr(0, 6), 10)
                        )
                    })
                }




            this.state.confidence_false = Math.round(data['data'][0]['confidence(False)']*100);
            this.state.confidence_true = Math.round(data['data'][0]['confidence(True)']*100);


            return data

            }



             )


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

                     <p> 2 </p>

                </div>

                <div className="col-lg-2">

                    <SearchSelection heroes = {this.state.heroes} callbackFromParent={this.setDireHero1}/>

                </div>

            </div>

            <div className="row my-auto">

                <div className="col-lg-2 offset-lg-3">



                </div>

                <div className="col-lg-1">

                    <p> {this.state.radiantHero2_val} </p>

                </div>

                <div className="col-lg-1">

                     <p> 2 </p>

                </div>

                <div className="col-lg-2">

                </div>

            </div>

             <div className="row my-auto">

                <div className="col-lg-2 offset-lg-3">



                </div>

                <div className="col-lg-1">

                    <p> {this.state.radiantHero3_val} </p>

                </div>

                <div className="col-lg-1">

                     <p> 2 </p>

                </div>

                <div className="col-lg-2">

                </div>

            </div>

             <div className="row my-auto">

                <div className="col-lg-2 offset-lg-3">



                </div>

                <div className="col-lg-1">

                    <p> {this.state.radiantHero4_val} </p>

                </div>

                <div className="col-lg-1">

                     <p> 2 </p>

                </div>

                <div className="col-lg-2">

                </div>

            </div>

             <div className="row my-auto">

                <div className="col-lg-2 offset-lg-3">



                </div>

                <div className="col-lg-1">

                    <p> {this.state.radiantHero5_val} </p>

                </div>

                <div className="col-lg-1">

                     <p> 2 </p>

                </div>

                <div className="col-lg-2">

                </div>

            </div>


        </div>)
    }

}

export default Home