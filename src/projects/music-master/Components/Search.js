import React, { Component } from 'react';

class Search extends Component {
    state = { artistQuery: '' };

    updateArtistQuery = (event) => {
        this.setState({ artistQuery: event.target.value});
    }

    handleKeyPress = (event) => {
        if(event.key == 'Enter') {
            this.searchArtist();
        }
    }

    searchArtist = (props) => {
       this.props.search(this.state.artistQuery);
    }

    render() {
        return (
            <div>
                <h2>Music Master</h2>
                <input 
                    placeholder='Enter an artist name' 
                    onChange={this.updateArtistQuery}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}

export default Search;