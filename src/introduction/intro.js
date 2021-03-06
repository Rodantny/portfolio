import {Component} from "react";
import React from "react";
import './intro.css';

let name = 'Rodantny Reyes'
let line1 = 'Software Engineer'
let line2 = 'Greater New York City Area'

class intro extends Component {
    render() {
        return (
            <div className="intro" >

                <img class="img-fluid rounded-circle img-circle" src="/images/me.jpg" alt='Rod'/><br></br>
                <a id="MyName">{name}</a><br></br>
                <a>{line1}</a><br></br>
                <a> {line2}</a>

                <div className="icons">
                        <a href="https://www.linkedin.com/in/rodantny/"><i className="fab fa-linkedin-square" ></i></a>
                         <a href="https://github.com/Rodantny"><i className="fab fa-github"></i></a>
                        <a href="mailto:rodantnyreyes@gmail.com"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        )
    }
}


export default intro;