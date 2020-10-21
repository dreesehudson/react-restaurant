import React, { Component } from 'react';
import Header from './Components/Header.js'
import Special from './Components/Special.js'
import Apps from './Components/Apps.js'
import Lunch from './Components/Lunch.js'
import Entrees from './Components/Entrees.js';
import Sides from './Components/Sides.js'
import Desserts from './Components/Desserts.js'
import Staff from './Components/Staff'
import { /*Components*/ } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Staff />
        <Special />
        <Apps />
        <Lunch />
        <Entrees />
        <Sides />
        <Desserts />
      </div>
    );
  }
}

export default App;
