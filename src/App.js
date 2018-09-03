import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CarouselPage from './components/Banner';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar></NavBar>
          <CarouselPage></CarouselPage>
          <About></About>
      </div>
    );
  }
}

export default App;
