import React from 'react';
import {connect} from "react-redux";

class HeroChoosen extends React.Component {
    constructor(props) {
        super(props);
    }

     render() {



         return (

             <div>

                 {this.props.radiantHero1}
                 {this.props.radiantHero2}
                 {this.props.radiantHero3}
                 {this.props.radiantHero4}
                 {this.props.radiantHero5}
                 {this.props.direHero1}
                 {this.props.direHero2}
                 {this.props.direHero3}
                 {this.props.direHero4}
                 {this.props.direHero5}



             </div>

         )
     }

}

const mapStateToProps = (state) => {
    return {
        radiantHero1: state.setHeroesReducer.radiantHero1_name,
        radiantHero2: state.setHeroesReducer.radiantHero2_name,
        radiantHero3: state.setHeroesReducer.radiantHero3_name,
        radiantHero4: state.setHeroesReducer.radiantHero4_name,
        radiantHero5: state.setHeroesReducer.radiantHero5_name,
        direHero1: state.setHeroesReducer.direHero1_name,
        direHero2: state.setHeroesReducer.direHero2_name,
        direHero3: state.setHeroesReducer.direHero3_name,
        direHero4: state.setHeroesReducer.direHero4_name,
        direHero5: state.setHeroesReducer.direHero5_name,


    }
}

export default connect(mapStateToProps)(HeroChoosen)
