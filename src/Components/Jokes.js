import React, { Component } from 'react';

class Jokes extends Component {
    state = ({ joke:{}, moreJokes:false, jokes:[] });

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then((response) => { return response.json(); })
        .then((data) => {
            console.log('Response Data = ', data)
            this.setState({ joke: data }) 
        })
        .catch((failed) => { alert(failed.message) })
    }

    // Class Property syntax - allows to access 'this' object on the compoent 
    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then((response) => { return response.json() })
            .then((data) => { 
                console.log('data =', data);
                this.setState({ jokes: data }) 
            })
            .catch((failed) => { alert(failed.message) })
    }

    render() {
        const { setup, punchline } = this.state.joke;
        return (
            <div>
                <h3>Highlighted Joke</h3>
                <p>{setup} --> <em>{punchline}</em></p>

                <button onClick={this.fetchJokes} style={{marginTop: 30}} className='button'>More Jokes</button>
                {
                    this.state.jokes.map((joke) => {
                        return (
                            <p key={joke.id} style={{margin: 20}}>{joke.setup} --> <em>{joke.punchline}</em></p>
                        )
                    })
                }
            </div>
        )
    }
}

export default Jokes;   