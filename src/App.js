import React, { Component } from 'react';
import Header from './Components/Header.js'
import Menu from './Components/Menu.js'
import Staff from './Components/Staff'
import { } from 'reactstrap';
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
        //container for API result
      ],

      adjectives: [
        //container to put all food adjectives into
      ],

      entrees: [ 
        //container to put all entree nouns into
      ],

      sides: [
        //container to put all side nouns into
      ],

      menu: [
        {
          name: "Appetizers",
          qty: 8,
          lowRange: 6,
          highRange: 12
        },
        {
          name: "Lunch",
          qty: 10,
          lowRange: 12,
          highRange: 25
        },
        {
          name: "Main Dishes",
          qty: 15,
          lowRange: 15,
          highRange: 35
        },
        {
          name: "Sides",
          qty: 12,
          lowRange: 3,
          highRange: 5
        },
        {
          name: "Desserts",
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

    this.getFoods = this.getFoods.bind(this);
    this.price = this.price.bind(this);
    //this.parseRawFoods = this.parseRawFoods.bind(this);
  }

  componentDidMount() {
    //load localStorage if present
    // let storedData = window.localStorage.getItem('rawFoods')
    // if (storedData) {
      //   this.setState({ rawFoods: JSON.parse(storedData) })
      // } else {
        //   window.localStorage.setItem('rawFoods', JSON.stringify({}))
        // }    
    this.getFoods();
    console.log(this.state.rawFoods);
    this.parseRawFoods(this.state.rawFoods);

  }
  componentDidUpdate() {
    //save list to localStorage on unload.
    //window.localStorage.setItem('rawFoods', JSON.stringify(this.state.foods))
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

  getFoods() {
    Axios.get(`https://entree-f18.herokuapp.com/v1/menu/25`)
      .then(res => {
        this.setState({ rawFoods: res.data.menu_items });
      })
  }

  parseRawFoods(arr) {
    //for each object in [rawFoods] split description at 'with' and 'and'
    console.log(arr)
    // let splitOne = this.state.rawFoods[i].description.split('and '); // split = [adj entree with adj side1, adj side2]
    // console.log(splitOne);
    // let _side = splitOne.splice(1, 1);
    // console.log(_side);

  }


  price(rangeLow, rangeHigh) {
    let cost = rangeLow + (Math.random() * rangeHigh - rangeLow);
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
