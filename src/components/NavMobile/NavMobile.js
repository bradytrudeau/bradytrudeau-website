import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './NavMobile.css';

class NavMobile extends Component {

  render() {
    return (
            <div className="nav-mobile">
                <div className="nav-right-mobile">
                    <AnchorLink 
                        href='#about'
                        className="nav-link-mobile">
                            ABOUT
                    </AnchorLink>
                </div>
                <div className="nav-right-mobile">
                    <AnchorLink 
                        href='#projects'
                        className="nav-link-mobile">
                            PROJECTS
                    </AnchorLink>
                </div>
                <div className="nav-right-mobile">
                    <AnchorLink 
                        href='#contact'
                        className="nav-link-mobile">
                            CONTACT
                    </AnchorLink>
                </div>
            </div>
    );
  }
}

export default NavMobile;