import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CarouselPage from './components/Banner';
import About from './components/About';
import Package from './components/Package';
import Process from './components/Process';
import Contact from './components/Contact';
import Application from './components/Application';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar></NavBar>
          <CarouselPage></CarouselPage>
          <About></About>
          <Package></Package>
          <Process></Process>
          <Application></Application>
          <Contact></Contact>
      </div>
    );
  }
}

export default App;
