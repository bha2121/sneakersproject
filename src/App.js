import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

import SubmitField from './Components/SubmitField'
import ShoeList from './Components/ShoeList'

class App extends Component {
  

  componentDidMount(){
    axios.get('')
    .then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <div className="Title">
           <p className="HeaderTxt">Sneaker List</p>
        </div>
        <br/>
        <div>
          <SubmitField/>
        </div>

        


      </div>
    );
  }
}

export default App;
