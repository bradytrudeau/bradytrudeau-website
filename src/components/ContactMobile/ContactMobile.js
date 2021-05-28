import React, { Component } from 'react';
import './ContactMobile.css';
import { GiSmartphone, GiMailbox, GiNewspaper } from 'react-icons/gi';
import resume from '../../Images/BradyTrudeauResume.pdf';

class ContactMobile extends Component {
  render() {
    return (
        <div id="contact" className="contactMobile">
            <div class="contactCardsMobile">
              <h2 className="contactH2Mobile">CONTACT</h2>
              <div className="left-halfMobile">
                    <h3 className="contactH3Mobile"><GiSmartphone size="50px" className="phone"/></h3>
                    <h3 className="contactH3Mobile">Phone</h3>
                    <hr width="50%"></hr>
                    <a className="resumeLink" href="tel:6125185889" target="_blank"><p>(612) 518-5889</p></a>
                </div>
                <div className="middleMobile">
                    <h3 className="contactH3Mobile"><GiMailbox size="50px" className="email"/></h3>
                    <h3 className="contactH3Mobile">Email</h3>
                    <hr width="50%"></hr>
                    <a className="resumeLink" href="mailto:bradytrudeau@gmail.com" target="_blank"><p>bradytrudeau@gmail.com</p></a>
                </div>
                <div className="right-halfMobile">
                    <h3 className="contactH3Mobile"><GiNewspaper size="50px" className="resume"/></h3>
                    <h3 className="contactH3Mobile">Resume</h3>
                    <hr width="50%"></hr>
                    <a className="resumeLink" href={resume} rel="noreferrer" target="_blank"><p>Click to Download</p></a>
                </div>
            </div>
         </div>
    );
  }
}

export default ContactMobile;