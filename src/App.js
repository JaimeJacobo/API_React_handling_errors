import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    data: {},
    isLoaded: false,
    errorMessage: ''
  }

  fetchElements(){
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken_Alfredo_Primavera')
    .then((response)=>{
      return response.json();
    })
    .then((responseJSON)=>{  
      if(responseJSON.meals == null){
        this.setState({
          errorMessage: 'There has been an error'
        })
      } else {
        this.setState({
          data: responseJSON,
          isLoaded: true
        })       
      }
    })
  }

  componentDidMount(){
    this.fetchElements();
  }

  render(){
    return (
      <div className="App">
        {
          this.state.isLoaded
          ? <h1>{this.state.data.meals[0].strMeal}</h1>
          : <div>
              <h1>Loading...</h1>
              <h2>{this.state.errorMessage}</h2>
            </div>
        }
      </div>
    );
  }
}

export default App;


