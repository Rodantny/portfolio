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

          <div className="line"></div>

          <div className="container">
            <Menu />
            <Intro />
          </div>

          <div id="portfolio"> </div> <Portfolio/>
          <div id="about"> </div><About/>
      </div>
    );
  }
}



export default App;
