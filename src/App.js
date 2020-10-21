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
      menu: []
      
    }
  }

  componentDidMount() {
    //load localStorage if present

    let storedData = window.localStorage.getItem('menu')
    if (storedData) {
      this.setState({ menu: JSON.parse(storedData) })
    } else {
      window.localStorage.setItem('menu', JSON.stringify({}))
    }
  }
  componentDidUpdate() {
    //save list to localStorage on unload.
    window.localStorage.setItem('menu', JSON.stringify(this.state.menu))
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
