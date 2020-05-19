import React, { Component } from 'react';
import PROJECTS from '../data/projects';

class Project extends Component {
    render() {
        return (    
            <div style={{display: 'inline-block', width: 400, height: 400, padding: 20, verticalAlign: 'top' }}> 
                <h3>{this.props.project.title} </h3>
                <img src={this.props.project.image} alt='profile' style={{width: 250, height:150}}></img>
                <p>{this.props.project.description}</p>
                <a href={this.props.project.link} target="_blank">{this.props.project.link}</a>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <h3> Projects </h3>
                <div>
                    {
                        PROJECTS.map((PROJECTS) => {
                            return(
                                <Project key={PROJECTS.id} project={PROJECTS} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;
export { Project };
// export default Project;