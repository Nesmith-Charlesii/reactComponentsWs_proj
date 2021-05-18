import logo from './logo.svg';
import './App.css';
import Car from './Car'
import {Component} from 'react'

class App extends Component {
  state = {
    myCar: {
      "color": "red",
      "make": "dodge",
      "model": "ram"
    },
    cars: [
      {
        "make": "toyota",
        "model": "corolla",
        "color": "black"
      },
      {
        "make": "toyota",
        "model": "prius",
        "color": "orange"
      },
      {
        "make": "ford",
        "model": "focus",
        "color": "yellow"
      }
    ]
  }



  renderCars(){
    return(
      this.state.cars.map((item) => 
        <li><Car color={item.color} make={item.make} model={item.model} /></li>
      )
    )
  }

  render(){
    return (
      <div className="App">
        <h1>"Hello"</h1>
        {/* <Car color="blue" type="toyota" model="corolla" /> */}
        <h1>My car:</h1>
        <Car color={this.state.myCar.color} make={this.state.myCar.make} model={this.state.myCar.model}/>
        <h2>Other cars:</h2>
        <ul>
          {this.renderCars()}
        </ul>
      </div>
    );
  }

}

export default App;
