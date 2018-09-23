import React, { Component } from 'react';
import './App.css';
import Intro from './introduction/intro.js'
import Menu from './menu/menu.js'
import Portfolio from './portfolio/portfolio.js'
import About from './about/about.js'



class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="line" id="top"></div>
          <div className="container">
            <Menu />
            <Intro />
          </div>
            <Portfolio/>
            <About/>
      </div>
    );
  }
}



export default App;
