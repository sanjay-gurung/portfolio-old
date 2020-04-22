import React, { Component } from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';

const BASE_URL = 'https://spotify-api-wrapper.appspot.com';

class App extends Component{
    state = { artist: null, tracks: [] };

    componentDidMount() {
        this.searchArtist('Elvis Presley')
    }

    searchArtist = (artistQuery) => {
        console.log('searchArtist', this.state);
        fetch(`${BASE_URL}/artist/${artistQuery}`)
            .then((response) => { return( response.json() ); })
            .then((data) => {
                this.setState({ artist: data.artists.items[0] });
                this.getArtistTopTrack();
            })
            .catch(() => { 
                alert( 'Sorry, cannot find the artist. Try another one'); 
                return null;

            })
    }

    getArtistTopTrack = () => {
        fetch(`${BASE_URL}/artist/${this.state.artist.id}/top-tracks`)
            .then((response) => { return( response.json()) })
            .then((data) => { this.setState({ tracks: data.tracks}); })
            .catch((failed) => { alert(failed.message) })
    }

    render() {  
        console.log('this.state = ', this.state);

        return(
            <div>
                <Search search={ this.searchArtist} />
                <Artist artist={this.state.artist}/>
                <hr />
                <h2>Top Tracks</h2>
                <Tracks tracks={this.state.tracks}/>               
            </div>
        );

    }   
}

export default App; 
