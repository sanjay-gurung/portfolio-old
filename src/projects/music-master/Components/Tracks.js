import React, { Component } from 'react';

class Tracks extends Component {
    state = ({ playing: false, playingAudio: null, previewNotAvailable: false });

    // Making playAudio function return a function itself by using double arrows. This is done because in the JSX below, the onClick 
    // handler need to have a reference to a function, not call the function witht the paramtere right in the JSX.  
    playAudio = (previewUrl) => () => { 
        const audio = new Audio( previewUrl );

        if ( previewUrl == null ) {
            alert('Sorry, this track is not avaiable for preview.');
        } else if ( !this.state.playing ) {
            audio.play();
            this.setState({ playing: true, playingAudio: audio });
        } else if ( this.state.paused ) {
            this.state.pausedAudio.play();
        } else if ( this.state.playingAudio.src !== audio.src) {
            this.state.playingAudio.pause();
            audio.play();
            this.setState({ playingAudio: audio });
        } else {
            this.state.playingAudio.pause();    
            this.setState({ playing: false });
        }
    }

    previewButton = (previewUrl) => {
        if ( previewUrl && this.state.playing && this.state.playingAudio.src === previewUrl) {
            return ( <span className='track-icon' >&#9724;</span>)
        } else if ( previewUrl ) {
            return ( <span className='track-icon' >&#9658;</span>)
        }
    }

    render() {
        return(
            <div>
                {
                    this.props.tracks.map((track) => {
                        const { id, name, preview_url } = track; 
                        
                        return (
                            <div key={id} onClick={ this.playAudio(preview_url) } alt='track-image' className='track'>
                                <img src={ track.album.images[0].url } className='track-image'></img>
                                <p>{ name }</p>
                                <p>{ this.previewButton(preview_url) }</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    

}

export default Tracks;