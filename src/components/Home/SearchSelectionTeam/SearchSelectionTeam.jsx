import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {connect} from "react-redux";



class SearchSelectionTeam extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const {teamsOptions} = this.props;

        return(

            <div>

                 <Dropdown
            placeholder='Выберите команду'
            fluid
            search
            options={teamsOptions}


          />

            </div>
        )
    }

}

export default SearchSelectionTeam