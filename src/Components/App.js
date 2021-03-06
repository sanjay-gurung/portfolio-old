import React, { Component } from 'react';
import Projects, { Project} from './Projects';
import SocialProfiles from './SocialProfiles';
import ProfilePic from '../assets/profilePic.jpeg';
import Title from './Title';

class App extends Component{
    constructor () {
        super ();
        this.state = { showBio: false };
        this.toggleShowBio = this.toggleShowBio.bind(this);
    }

    toggleShowBio() {
        this.setState({ showBio: !this.state.showBio });
    }

    render() {
        return(
            <div>
                <img src={ProfilePic} className='profilePic' />
                <h2>Hello!</h2>
                <p>Welcome to my portfolio.</p>
                <p>My name is Sanjay Gurung.</p>
                <Title />
                <p>I look forward to working on a fun and challanging project</p>
                {
                    this.state.showBio ? (
                        <div>
                            <p>I'm a motivated Front End developer specialized on Angular and React.</p>
                            <p>Quality is my top priority as I came from a QA background. </p> 
                            <button onClick={this.toggleShowBio} className='button'>Collaps</button>
                        </div>
                    ): (
                    <div>
                       <button onClick= {this.toggleShowBio} className='button' type='button'> Read More </button>
                    </div>)

                }
                <hr style={{margin: 50}} />
                <Projects />
                <hr style={{margin: 50}} />
                <SocialProfiles />
            </div>
        )

    }
}

// export { App };
export default App; 
