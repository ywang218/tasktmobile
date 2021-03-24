import React, {Component} from 'react';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.setState({data: this.props.data})
  }

  render(){
     console.log('inside content', this.state.data)
    
    return(
      <tbody>
         {this.props.data.map((ele, index) => {
           return(
           <tr key={index}>
              <td>{ele.id}</td>
              <td>{ele.email}</td>
              <td>{ele.first_name}</td>
              <td>{ele.last_name}</td>
              <td><img src={ele.avatar} width="50px" height="50px"/></td>
              <td onClick={()=>{
                this.props.data.splice(index, 1);
                this.setState({data: this.props.data})
              }}>X</td>
           </tr>
           )
         })}
      </tbody>
    )
  }
}

export default Content;