import {Component} from "react";
import React from "react";
import './menu.css';

class menu extends Component {
    render() {
        return (
            <div className="navi links " >
                <div className="sand_bar"><a> <i className="fas fa-bars"></i></a></div>
                <div className="links" >
                    <a target="_blank"  rel="noopener noreferrer"
                       href="https://drive.google.com/file/d/1nJ9A_fD7TfZuw-fT4Lm3y0lObxvbpiG3/view?usp=sharing">Resume</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        )
    }
}


export default menu;