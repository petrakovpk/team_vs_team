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

                   <SearchSelection heroesOptions = {this.state.heroes}></SearchSelection>

                </div>

                 <div className="col-lg-3 ">

                     <HeroChoosen></HeroChoosen>



                </div>

            </div>

        </div>)
    }

}


export default Home
