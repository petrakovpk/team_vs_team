import React from 'react';
import SearchSelection from '../SearchSelection/SearchSelection.js';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            heroes : []
        }

    }

    componentDidMount() {
     const url = 'https://api.opendota.com/api/heroes'
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                    for (var i = 0; i < result.length; i++) {
                        this.state.heroes[i] = {key: result[i]['id'], value: result[i]['name'], text: result[i]['localized_name']}
                    }
                    console.log(result.length)
                }
            )

  }



    render() {

        return (

        <div className="container-fluid">

            <div className="row my-auto">

                <div className="col-lg-2 offset-lg-3">

                    <SearchSelection heroes = {this.state.heroes}/>

                </div>

                <div className="col-lg-1">



                </div>

                <div className="col-lg-1">

                </div>

                <div className="col-lg-2">

                    <SearchSelection heroes = {this.state.heroes}/>

                </div>


            </div>


        </div>)
    }

}

export default Home