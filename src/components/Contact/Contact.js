import React, { Component } from 'react';
import './Contact.css';
import { GiSmartphone, GiMailbox, GiNewspaper } from 'react-icons/gi';
import resume from "../../../src/resume.pdf";

class Contact extends Component {
  render() {
    return (
        <div id="contact" className="contact">
            <div class="contactCards">
              <h2 className="contactH2">CONTACT</h2>
              <div className="left-half">
                    <h3 className="contactH3"><GiSmartphone size="50px" className="phone"/></h3>
                    <h3 className="contactH3">Phone</h3>
                    <hr width="50%"></hr>
                    <a className="resumeLink" href="tel:6125185889" target="_blank"><p>(612) 518-5889</p></a>
                </div>
                <div className="middle">
                    <h3 className="contactH3"><GiMailbox size="50px" className="email"/></h3>
                    <h3 className="contactH3">Email</h3>
                    <hr width="50%"></hr>
                    <a className="resumeLink" href="mailto:bradytrudeau@gmail.com" target="_blank"><p>bradytrudeau@gmail.com</p></a>
                </div>
                <div className="right-half">
                    <h3 className="contactH3"><GiNewspaper size="50px" className="resume"/></h3>
                    <h3 className="contactH3">Resume</h3>
                    <hr width="50%"></hr>
                    <a className="resumeLink" href={resume} target="_blank"><p>Click to Download</p></a>
                </div>
            </div>
         </div>
    );
  }
}

export default Contact;