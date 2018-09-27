import {Component} from "react";
import React from "react";
import './about.css';

class about extends Component {
    render() {
        return (
            <div class="about">
                <div className='container'>
                    <div className='col-lg-4'>
                        <img src='/images/me.png' />
                    </div>
                    <div className="col-lg-8">

                        <br></br>
                        <a id="about_title">About Me</a><br/>
                        <a> My name is <b>Rodantny Reyes</b> and I love making things for the web.</a><br/> <br/>
                        <a>
                            I am a highly motivated Computer Science graduate from <b>William Paterson University of New Jersey</b>.
                            Passionate software developer with a wide array of experience including C++, Python, Django, HTML/CSS,
                            Bootstrap, JavaScript, and more!
                        </a>
                        <br/><br/>
                        <a id="about_title">Contact Me</a><br/>
                        <a> Need to get in contact with me? Click on one of the cool icons below to get my Email, Linkedin, Github, and even my Resume.</a><br/>
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/rodantny/"><i className="fab fa-linkedin-square" ></i></a>
                            <a href="https://github.com/Rodantny"><i className="fab fa-github"></i></a>
                            <a href="mailto:rodantnyreyes@gmail.com"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                <br></br>
                Rodantny J. Reyes 2018
            </div>

        )
    }
}


export default about;