import {Component} from "react";
import React from "react";
import './about.css';

class about extends Component {
    render() {
        return (
            <div class="about">
                <div className='container'>

                    <div className="row no-gutters">
                    <div class="col-auto" >
                        <img id='about_image' alt='Rodantny Reyes' src='/images/me.png' />
                    </div>
                    <div className="col about_text">

                        <a id="about_title">About Me</a><br/>
                        <a> My name is <b>Rodantny Reyes</b> and I love making things for the web.</a><br/>
                        <a>
                            I am a highly motivated Computer Science graduate from <b>William Paterson University of New Jersey</b>.
                            Passionate software developer with a wide array of experience including React, JavaScript, Python,
                            Django, HTML/CSS, Bootstrap, C++, and more!
                        </a><br/><br/>
                     

                        <a id='contact'><b>Contact Me</b></a><br/>

                        <a> Looking to get in contact with me? Click on one of the awesome icons below to get my Email, Linkedin, Github, and even my Resume.</a><br/>
                        <div className="icons">
                            <a href="mailto:rodantnyreyes@gmail.com"><i className="fas fa-envelope"></i></a>
                            <a href="https://www.linkedin.com/in/rodantny/"><i className="fab fa-linkedin-square" ></i></a>
                            <a href="https://github.com/Rodantny"><i className="fab fa-github"></i></a>
                            <a href="https://drive.google.com/file/d/1nJ9A_fD7TfZuw-fT4Lm3y0lObxvbpiG3/view?usp=sharing"><i className="fas fa-file"></i></a>

                        </div>
                    </div>
                    <br></br>
                    <div className="col-lg-12 copyright">
                   Copyright © 2018 Rodantny J. Reyes
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default about;
