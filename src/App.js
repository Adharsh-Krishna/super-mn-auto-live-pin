import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CarouselPage from './components/Banner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar></NavBar>
          <CarouselPage></CarouselPage>
      </div>
    );
  }
}

export default App;
