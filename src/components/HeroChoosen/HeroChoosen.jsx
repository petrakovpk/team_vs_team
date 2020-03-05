import React from 'react';
import {connect} from "react-redux";

class HeroChoosen extends React.Component {
    constructor(props) {
        super(props);
    }

     render() {

        console.log(this.props)



        const {radiantHero1} = this.props;

         return (

             <div>

                 {radiantHero1}

             </div>

         )
     }

}

const mapStateToProps = (state) => {
    return {
        radiantHero1: state.setHeroesReducer.radiantHero1_name,
    }
}

export default connect(mapStateToProps)(HeroChoosen)
