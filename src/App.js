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

      entrees: [
        //container to put all entree nouns into
      ],

      sideDishes: [
        //container to put all side nouns into
      ],

      apps: [
        /*itemPicker() populates here*/
      ],

      lunch: [

      ]

      /*itemPicker() populates here*/
      ,

      main: [

      ]
      /*itemPicker() populates here*/
      ,


      sides: [
        /*itemPicker() populates here*/
      ],

      desserts: [
        /*itemPicker() populates here*/
      ],

      menu: [
        {
          name: "Appetizers",
          qty: 8,
        },
        {
          name: "Lunch",
          qty: 10,
        },
        {
          name: "Main Dishes",
          qty: 15,
        },
        {
          name: "Sides",
          qty: 12,
        },
        {
          name: "Desserts",
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

  async componentDidMount() {
    //if rawFoods object is in localStorage load that, else call API to get foods
    // const foods = localStorage.getItem('rawFoods');
    // if (foods) {
    //   this.setState({ rawFoods: foods })
    // } else {
      let self = this
      await Axios.get('https://entree-f18.herokuapp.com/v1/menu/25')
        .then(res => {
          self.setState({ rawFoods: res.data.menu_items });
          //manipulate response data to store in state arrays
          self.parseRawFoods(self.state.rawFoods);
          //pick apps
          self.singleItemPicker(self.state.sideDishes, "apps", self.state.menu[0].qty)
          console.log(self.state)
          //pick lunch
          self.multipleItemPicker(self.state.entrees, self.state.sideDishes, "lunch", self.state.menu[1].qty, 1)

          //pick mains
          self.multipleItemPicker(self.state.entrees, self.state.sideDishes, "main", self.state.menu[2].qty, 2)

          //pick sideDishes
          self.singleItemPicker(self.state.sideDishes, "sides", self.state.menu[3].qty)

          //pick desserts
          self.singleItemPicker(self.state.entrees, "desserts", self.state.menu[4].qty)
        })
    }
  // }

  componentDidUpdate() {
    //save list to localStorage on unload.
    window.localStorage.setItem('rawFoods', JSON.stringify(this.state.rawFoods))


  }


  parseRawFoods(arr) {
    //for each object in [rawFoods] split description at 'with' and 'and'. Then push the food items to this.state.entree or this.state.sides
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      let splitOne = this.state.rawFoods[i].description.split(' and '); // split = [adj entree with adj side1, adj side2]
      let _side = splitOne.pop();
      this.setState({ sideDishes: [...this.state.sideDishes, _side] })

      let splitTwo = splitOne.toString().split(' with ');
      _side = splitTwo.pop();
      this.setState({ sideDishes: [...this.state.sideDishes, _side] })

      let _entree = splitTwo.toString();
      this.setState({ entrees: [...this.state.entrees, _entree] })

    }
  }

  singleItemPicker(firstArrFrom, arrTo, qty) {
    //loop qty times to populate elements in arrTo
    let tempArray = [];
    for (let i = 0; i < qty; i++) {
      //push empty element into arrTo
      //determine random index of arrFrom
      let randIndex = Math.floor(Math.random() * firstArrFrom.length);

      //set arrTo[i] = arrFrom[randomIndex]
      tempArray.push(firstArrFrom[randIndex]);

    }
    console.log(tempArray, arrTo)
    console.log(this.state[arrTo])
    this.setState({ [arrTo]: tempArray })
  }
  multipleItemPicker(firstArrFrom, secondArrFrom, arrTo, qty, level) {
    //loop qty times to populate elements in arrTo
    for (let i = 0; i < qty; i++) {
      let _arr = []
      //push empty element into arrTo
      _arr.push("");
      //determine random index of arrFrom
      let randIndex = Math.floor(Math.random() * firstArrFrom.length);

      //set arrTo[i] = firstArrFrom[randomIndex], with, secondArrFrom[randIndex] etc
      _arr.push(firstArrFrom[randIndex]);
      _arr.push("with");
      _arr.push(secondArrFrom[randIndex]);
      if (level > 1) {
        _arr.push("and");
        _arr.push(secondArrFrom[randIndex + 1]);
      }
      let str = _arr.join(" ");
      this.setState({ [arrTo]: [...this.state[arrTo], str] });
    }
    console.log(arrTo);
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Staff
          members={this.state.members} />
        <Menu
          menu={this.state.menu}
          apps={this.state.apps}
          lunch={this.state.lunch}
          main={this.state.main}
          sides={this.state.sides}
          desserts={this.state.desserts}
          images={this.state.images} />
      </div>
    );
  }

}

export default App;



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

  //sideDishes
  // side1

  //desserts
  // adj entree