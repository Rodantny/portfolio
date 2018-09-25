import {Component} from "react";
import React from "react";
import './about.css';

class about extends Component {
    render() {
        return (
            <div className="intro">
                <div className='container'>
                    <div className="about" >
                        <a id="MyName">About Me</a><br/>
                        <a> My name is Rodantny Reyes and I love making things for the web.</a><br></br>
                        <a>
                            I am a highly motivated Computer Science graduate from William Paterson University of New Jersey. Passionate software developer with a wide array of experience including C++, Python, Django, HTML/CSS, Bootstrap, JavaScript, and more!
                        </a>
                    </div>
                </div>
                <br></br>
                Rodantny J. Reyes 2018
            </div>

        )
    }
}


export default about;