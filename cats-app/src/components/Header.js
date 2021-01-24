import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => (
    <div className="header">
        <div className="header-elem"><a href="/">Spring Home</a></div>
        <div className="header-elem"><a href="/cats">Cats</a></div>
        <div className="header-elem"><a href="#"></a></div>
        <div className="header-elem"><Link to="/cats">react Home</Link></div>
        <div className="header-elem"><Link to="/cats-main">Cats</Link></div>
        <div className="header-elem"><Link to={`/cats/${1}`}>Cat</Link></div>

    </div>
)

export default Header;