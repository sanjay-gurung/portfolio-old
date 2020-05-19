import React, { Component } from 'react';
import ReactDOM from 'react-dom'

const TITLES = [
    'a Front End developer',
    'an enthusiastic learner.',
    'an outdoor fun loving persion.',
    'a good team player.'
]

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };
    
    componentDidMount() {   
        this.timeout = setTimeout (() => {this.setState( { fadeIn: false })}, 2000);

        this.animateTitle();
    }

    componentWillUnmount() {
        console.log ('Component will be unmounted now!!!');
        clearInterval(this.titleInterval);
        clearInterval(this.timeout);
    }

    animateTitle() {
        this.titleInterval = setInterval(() => {
            const index = (this.state.titleIndex + 1) % TITLES.length ;

            this.setState( {titleIndex: index, fadeIn: true});  

            this.timeout = setTimeout (() => {this.setState( { fadeIn: false })}, 2000);
        }, 4000);
        
    }

    render() {
        const title = TITLES[this.state.titleIndex];
        return(
            <p className={ this.state.fadeIn ? ('title-fade-in') : ('title-fade-out')}>I am {title}</p>
        )
    }
}

export default Title;