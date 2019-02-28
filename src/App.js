import React, { Component } from 'react';
import './App.css';
import Intro from './introduction/intro.js'
import Menu from './menu/menu.js'
import Portfolio from './portfolio/portfolio.js'
import PortfolioMobile from './portfolio/portfolio_mobile.js'
import About from './about/about.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className=' animated fadeIn delay-2s'>
             <div className="line"></div>
              <div className="container">
                  <Menu />
                  <Intro />
             </div>

              <div id="portfolio"> </div>
          </div>
          <div  id="desktop" className='animated bounceInDown slow'>
              <Portfolio/>
          </div>

          <div id="mobile" className=' animated bounceInDown slow'>
              <PortfolioMobile/>
          </div>


          <div id="about" className=' animated fadeIn delay-2s'><About/> </div>
      </div>
    );
  }
}



export default App;
