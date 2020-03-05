import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {changeRadiantHero1} from "../../actions/setHero";
import {connect} from "react-redux";


class SearchSelection extends React.Component {
   constructor(props){
        super(props);
    }

    render() {
       const {changeRadiantHero1, heroesOptions} = this.props;

     return (

         <div>
          <Dropdown
            placeholder='Введите персонажа'
            fluid
            search
            options={heroesOptions}
            onChange={(e,data) => {
                changeRadiantHero1(data.value);
            }}

          />


          </div>
          )

    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        changeRadiantHero1: bindActionCreators(changeRadiantHero1, dispatch)

    }


}

const mapStateToProps = (state) => {
    return {
        radiantHero1: state.setHeroesReducer.radiantHero1_name,
        radiantHero2: state.setHeroesReducer.radiantHero2_name,

    }
}



const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


export default connect(mapStateToProps,mapDispatchToProps)(SearchSelection)
