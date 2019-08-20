import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      pets: [],
      errorMessage: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/pets')
      .then(response => response.json())
      .then(pets => this.setState({pets: pets}))
      .catch(error => this.setState({errorMessage: error.message}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pets</h1>
        </header>
      </div>
    );
  }
}

export default App;
