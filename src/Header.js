import React, {Component} from 'react';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    console.log('line 13 in Header', this.props.filed, this.props.filed[0])
    return(
      <thead>
       <tr>
        {this.props.filed.map((ele, index) => {
          return(
            <th>{ele}</th>
          )
        })}
      </tr>
      </thead>
    )
  }
}

export default Header;