import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'am', value: 'af',  text: 'anti-mage' },
  { key: 'vo', value: 'ax', text: 'void' },


]

class SearchSelection extends React.Component {
   constructor(props){
        super(props);
    }

    onChange = (e,data) => {

    this.props.callbackFromParent(data.value)

  }

    render() {
     return (

          <Dropdown
            placeholder='Введите персонажа'
            fluid
            search
            selection
            options={this.props.heroes}
            onChange={this.onChange}

          />
     )

    }

}


const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default SearchSelection
