import React, { Component } from 'react';
import Header from './Components/Header.js'
import Menu from './Components/Menu.js'
import Staff from './Components/Staff'
import { /*Components*/ } from 'reactstrap';
import Remy from "./img/remy.png";
import Alfredo from "./img/alfredo.jpg";
import Colette from "./img/Colette.jpg";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu: [],

      members: [
        {name: "alfredo linguini",
        role: "sous-chef de cuisine",
        img: Alfredo},
        {name: "remy",
         role: "chef de cuisine",
         img: Remy},
         {name: "colette tatou",
         role: "rôtisseur",
         img: Colette}
    ]
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

  price(){

  }



  render(){
    return (
      <div className="App">
        <Header />
        <Staff members={this.state.members} />
        <Menu menu={this.state.menu} />
      </div>
    );
  }
}

export default App;
