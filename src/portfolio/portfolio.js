import {Component} from "react";
import React from "react";
import './portfolio.css';
import Projects from './project.json';

class portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            classes: 'drop',
            project: Projects.array
        };
    }

    click() {
        this.state.active? this.is_true():this.is_false();

    }

    is_true(){
        this.setState({active: false, classes: 'selected'});
    }

    is_false(){
        this.setState({active: true, classes: 'drop'});
    }

    render() {
        return (
            <div className="portfolio" id="d-wrapper">

                    <div className="zig-zag-bottom zig-zag-top">
                        <div className="container">
                            <Navigation data={this.state.project}/>

                        </div>

                    </div>

            </div>

        )
    }
}

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data :this.props.data,
            current_project:0
        };

        // This binding is necessary to make `this` work in the callback
    }

    handleClick(e, id) {
        var temp = this.state.data;
        for (var key in temp){
            temp[key].selected = false;
        }

        temp[id].selected = true;
        this.setState(state => ({
            data: temp,
            current_project: id
        }));

    }

    render() {
        var current_project = this.state.current_project;
        var description;

        for (var key in this.state.data[current_project].description){
            var value = this.state.data[current_project].description[key];
            var oldvalue = description;
            description =  <a> {oldvalue}{value}<br/></a>;
        }

        return (
            <div>
            <div className="row" id="project_select">
                {this.state.data.map((data,i) => (

                <div className="col-md-3 col-sm-6 mb-4">

                    <div id="box">
                        <a onClick={(e) => this.handleClick(e, data.id)}>
                            <img className={data.selected? ' img-fluid project_select_card selected': ' img-fluid project_select_card not_selected' }
                                 src={data.url}/>
                        </a>

                    </div>
                    {data.selected? <i className="fas fa-caret-up" id="arrow"/>: ''}

                </div>
                ))}
            </div>
                <h1><b>{this.state.data[current_project].title}</b></h1>
                {description}
                <br/><br/>
                    <a><strong> Frontend:</strong></a><br/>
                    <span className="button">ReactJs</span>
                    <span className="button">HTML</span>
                    <span className="button">CSS</span>
                    <span className="button">Bootstrap Framework</span><br/>
                    <a><strong> Backend:</strong> </a><br/>
                    <span className="button">PostgreSQL</span>
                    <span className="button"> Python</span>
                    <span className="button">Django Framework</span>
                    <span className="button">RESTapi</span>
                <br/><br/>
                <a target="_blank" className="button_icon" href="http://wpushuttle.com/"><i className="fas fa-link"></i> View Project</a>
                <a target="_blank" className="button_icon" href="#"><i className="fab fa-github"></i> View Code</a>
            </div>
        )
    }
}
export default portfolio;