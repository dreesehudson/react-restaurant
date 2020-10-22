import React, { Component } from 'react';
import Header from './Components/Header.js'
import Menu from './Components/Menu.js'
import Staff from './Components/Staff'
import { /*Components*/ } from 'reactstrap';
import Remy from "./img/remy.png";
import Alfredo from "./img/alfredo.jpg";
import Colette from "./img/Colette.png";
import Ratatouille from "./img/dish.png"
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [
        {
          name: "special",
          qty: 1,
        },
        {
          name: "apps",
          qty: 8,
        },
        {
          name: "lunch",
          qty: 10,
        },
        {
          name: "entrees",
          qty: 15,
        },
        {
          name: "sides",
          qty: 12,
        },
        {
          name: "desserts",
          qty: 8,
        },

      ],

      members: [
        {
          name: "alfredo linguini",
          role: "sous-chef de cuisine",
          img: Alfredo
        },
        {
          name: "remy",
          role: "chef de cuisine",
          img: Remy
        },
        {
          name: "colette tatou",
          role: "rôtisseur",
          img: Colette
        }
      ],

      images: [
        {
          name: "ratatouille",
          img: Ratatouille
        },


      ]
    }
  }


  // API Return Format
  // {
  //   "description": "Peppered eggplant with smashed corn and vibrant carrots"
  //   },

  // API Return Format
  // {
  //   "description": "Adj Noun with Adj Noun and Adj Noun"
  //   },


  // buildSection(name, num) {
  //   switch (name) {
  //     case 'Apps':

  //     case 'Lunch':

  //     case 'Entrees':

  //     case 

  //     default:
  //   }

  // }

  // }

  // getMenu(numberOfDishes) {
  //   Axios.get(`https://entree-f18.herokuapp.com/v1/menu/{dishes}`)
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ menu: res.data });
  //     });

  // }

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

  price() {

  }



  render() {
    return (
      <div className="App">
        <Header />
        <Staff members={this.state.members} />
        <Menu menu={this.state.menu} images={this.state.images} />
      </div>
    );
  }
}

export default App;
