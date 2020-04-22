import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { Component } = props;    
    return (
        <div>
            <div>
                <h3 className='header'><Link to='/'>Home</Link></h3>
                <h3 className='header'><Link to='/jokes'>Jokes</Link></h3>
                <h3 className='header'><Link to='/music-master'>Music-Master</Link></h3>
            </div>
            <Component />
        </div>
    )
}

export default Header;