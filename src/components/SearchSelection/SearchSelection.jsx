import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {getMatchResult} from "../../components/GetMLResults/AskRapidminer"
import {changeRadiantHero1
    ,changeRadiantHero2
    ,changeRadiantHero3
    ,changeRadiantHero4
    ,changeRadiantHero5
    ,changeDireHero1
    ,changeDireHero2
    ,changeDireHero3
    ,changeDireHero4
    ,changeDireHero5
} from "../../actions/setHero";
import {connect} from "react-redux";





class SearchSelection extends React.Component {
   constructor(props){
        super(props);
    }



    render() {

       const { heroesOptions
           , hero_type
           , changeRadiantHero1
           , changeRadiantHero2
           , changeRadiantHero3
           , changeRadiantHero4
           , changeRadiantHero5

           , changeDireHero1
           , changeDireHero2
           , changeDireHero3
           , changeDireHero4
           , changeDireHero5

       } = this.props;

       const changeHero = (hero_type, hero_name) =>{

           switch (hero_type){

               case 'radiantHero1':
                    return changeRadiantHero1(hero_name);
               case 'radiantHero2':
                    return changeRadiantHero2(hero_name);
               case 'radiantHero3':
                   return changeRadiantHero3(hero_name);
               case 'radiantHero4':
                   return changeRadiantHero4(hero_name);
               case 'radiantHero5':
                   return changeRadiantHero5(hero_name);
               case 'direHero1':
                   return changeDireHero1(hero_name);
               case 'direHero2':
                   return changeDireHero2(hero_name);
               case 'direHero3':
                   return changeDireHero3(hero_name);
               case 'direHero4':
                   return changeDireHero4(hero_name);
               case 'direHero5':
                   return changeDireHero5(hero_name);


           }









        }

        const getML = () => {

            getMatchResult()
        }


        return (

         <div>

             <Dropdown
            placeholder='Введите персонажа'
            fluid
            search
            options={heroesOptions}

            onChange={(e,data) => {
                changeHero(hero_type, data.value);
                getML()
            }}

          />

          </div>

        )

    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        changeRadiantHero1: bindActionCreators(changeRadiantHero1, dispatch),
        changeRadiantHero2: bindActionCreators(changeRadiantHero2, dispatch),
        changeRadiantHero3: bindActionCreators(changeRadiantHero3, dispatch),
        changeRadiantHero4: bindActionCreators(changeRadiantHero4, dispatch),
        changeRadiantHero5: bindActionCreators(changeRadiantHero5, dispatch),
        changeDireHero1: bindActionCreators(changeDireHero1, dispatch),
        changeDireHero2: bindActionCreators(changeDireHero2, dispatch),
        changeDireHero3: bindActionCreators(changeDireHero3, dispatch),
        changeDireHero4: bindActionCreators(changeDireHero4, dispatch),
        changeDireHero5: bindActionCreators(changeDireHero5, dispatch),

    }


}

const mapStateToProps = (state) => {
    return {

        radiantHero1_name: state.setHeroesReducer.radiantHero1_name,
        radiantHero2_name: state.setHeroesReducer.radiantHero2_name,
        radiantHero3_name: state.setHeroesReducer.radiantHero3_name,
        radiantHero4_name: state.setHeroesReducer.radiantHero4_name,
        radiantHero5_name: state.setHeroesReducer.radiantHero5_name,
        direHero1_name: state.setHeroesReducer.direHero1_name,
        direHero2_name: state.setHeroesReducer.direHero2_name,
        direHero3_name: state.setHeroesReducer.direHero3_name,
        direHero4_name: state.setHeroesReducer.direHero4_name,
        direHero5_name: state.setHeroesReducer.direHero5_name,


    }
}



const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


export default connect(mapStateToProps,mapDispatchToProps)(SearchSelection)
