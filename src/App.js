import React, { Component } from 'react';
import Header from './Components/Header.js'
import Menu from './Components/Menu.js'
import Staff from './Components/Staff'
import {  } from 'reactstrap';
import Remy from "./img/remy.png";
import Alfredo from "./img/alfredo.jpg";
import Colette from "./img/Colette.png";
import Ratatouille from "./img/dish.png";
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rawFoods: [

      ],

      adjectives: [

      ],

      entrees: [

      ],

      sides: [

      ],
      
      menu: [
        {
          name: "apps",
          qty: 8,
          lowRange: 6,
          highRange: 12
        },
        {
          name: "lunch",
          qty: 10,
          lowRange: 12,
          highRange: 25
        },
        {
          name: "mainDishes",
          qty: 15,
          lowRange: 15,
          highRange: 35
        },
        {
          name: "sides",
          qty: 12,
          lowRange: 3,
          highRange: 5
        },
        {
          name: "desserts",
          qty: 8,
          lowRange: 6,
          highRange: 10
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

    this.price = this.price.bind(this);
  }


  // API Return Format
  // {
  //   "description": "Peppered eggplant with smashed corn and vibrant carrots"
  //   },

  // API Return Format
  // {
  //   "description": "Adj Noun with Adj Noun and Adj Noun"
  //   },

  //'main dishes':
  // full string description, adj entree with adj side1 and adj side2

  //lunch
  // full string description, adj entree with adj side1
  // 

  //apps
  // adj side1

  //sides
  // side1

  //desserts
  // adj entree

  parseRawFoods(obj) {
    // //for each object in [foods] split description at 'with' and 'and' , then 
    // let andSplit = obj.description.split(' '); // split = [adj entree with adj side1, adj side2]
    // andSplit[0].split
  }

  uniqueWordsOnly() {

  }

  buildSection(style, num) {
    switch (style) {
      case 'mainDishes':
        // full string description, adj entree with adj side1 and adj side2
        break
      case 'lunch':
        // full string description, adj entree with adj side1
        break
      case 'apps':
        // adj side1
        break
      case 'sides':
        // side1
        break
      case "desserts":
        // adj entree
        break
      default:
    }
  }

  

  getFoods() {
    Axios.get(`https://entree-f18.herokuapp.com/v1/menu/25`)
      .then(res => {
        this.setState({ rawFoods: res.data });
        
        console.log(this.state.rawFoods);
      });

  }

  componentDidMount() {
    //load localStorage if present
    this.getFoods();
    let storedData = window.localStorage.getItem('rawFoods')
    if (storedData) {
      this.setState({ rawFoods: JSON.parse(storedData) })
    } else {
      window.localStorage.setItem('rawFoods', JSON.stringify({}))
    }

  }
  componentDidUpdate() {
    //save list to localStorage on unload.
    window.localStorage.setItem('rawFoods', JSON.stringify(this.state.foods))
  }

  price(rangeLow, rangeHigh) {
    let cost = rangeLow + (Math.random()*rangeHigh - rangeLow);
    return cost;
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
