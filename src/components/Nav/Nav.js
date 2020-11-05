import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Nav.css';

class Nav extends Component {
  render() {
    return (
            <div className="nav">
                <div className="nav-right">
                    <AnchorLink 
                        href='#about'
                        className="nav-link">
                            ABOUT
                    </AnchorLink>
                    <AnchorLink 
                        href='#projects'
                        className="nav-link">
                            PROJECTS
                    </AnchorLink>
                    <AnchorLink 
                        href='#contact'
                        className="nav-link">
                            CONTACT
                    </AnchorLink>
                </div>
            </div>
    );
  }
}

export default Nav;