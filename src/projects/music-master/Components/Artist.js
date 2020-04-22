import React, { Component } from 'react';

const Artist = (props) => {
    if (!props.artist) {
        return null;
    }

    const { images, name, followers, genres, popularity } = props.artist;

    return (
        <div>
            <img src={images[1] &&images[1].url} alt='artist-profile' className='artist-image'></img>
            <h2>{name}</h2>
            <p>Genres: {genres.join(', ')}</p>
            <p>Followers: {followers.total}</p>
        </div>
    )
}

export default Artist;  