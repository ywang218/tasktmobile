import React, {Component} from "react";
import "./style.css";
import Header from './Header';
import Content from './Content';
import axios from 'axios';

const filed = ['id', 'Email', 'First Name', 'Last Name', 'Photo', 'Remove'];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    axios.get('https://reqres.in/api/users').then(
      res=>this.setState({data: res.data.data})
    ).catch(
      
    )
  }

  render(){
    console.log('data is:', this.state.data);
     return(
       <div>
        <table>
               <Header filed={filed}/>
               <Content data={this.state.data}/>
        </table>
       </div>
     )
  }
}

export default App;
