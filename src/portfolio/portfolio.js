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
            <div className="portfolio"  id="d-wrapper" >

                    <div className="zig-zag-bottom zig-zag-top"  >
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
        var current_project_id = this.state.current_project;
        var project = this.state.data[current_project_id];

        return (
            <div>
                <div  className='row animated fadeIn delay-2s'  id="project_select">
                    {this.state.data.map((data,i) => (
                        <div className="col-md-3 col-sm-6 mb-4">

                            <div id="box">
                                <a onClick={(e) => this.handleClick(e, data.id)}>
                                    <img alt='project' className={data.selected? ' img-fluid project_select_card selected': ' img-fluid project_select_card not_selected' }
                                         src={data.url}/>
                                </a>

                            </div>

                            {data.selected? <i className="fas fa-caret-up" id="arrow"/>: ''}

                        </div>
                    ))}

                </div>

                <div className='animated fadeIn delay-2s' id='project_details'>
                    <h1><b>{project.title}</b></h1>

                    <Description data={project.description}/>

                    <TechButton data={project.technology}/>
                    {project.techology_split ?    <TechButton data={project.fontend} stack='Frontend:'/> : ''}
                    {project.techology_split ?    <TechButton data={project.backend} stack='Backend:'/> : ''}

                    <ExternalButton data={project.external_link}/>
                </div>
            </div>
        )
    }
}

class TechButton extends Component {
    render() {
        return (
            <div>

                <a><strong> {this.props.stack}</strong> </a><br/>
                {this.props.data.map(function(tech, idx){
                    return (<span id={idx} className="button">{tech}</span>)
                })}
            </div>
        )
    }
}

class ExternalButton extends Component {
    render() {
        return (
            <div>
                {this.props.data.map(function(object, idx){
                    return (  <a id={idx} target="_blank" rel="noopener noreferrer"  className="button_icon" href={object.url}><i className={object.icon}></i> {object.title}</a>)
                })}
            </div>
        )
    }
}

class Description extends Component {
    render() {
        return (
            <div>
                {this.props.data.map(function(paragraph, idx){
                    return (<a id={idx}>{paragraph}<br/></a>)
                })}
            </div>
        )
    }
}

export default portfolio ;
