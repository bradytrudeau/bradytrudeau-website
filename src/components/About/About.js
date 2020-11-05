import React, { Component } from 'react';
import './About.css';
import family from '../../Images/2.png';
import linkedin from '../../Images/linkedin.png';
import github from '../../Images/github.png';
import fb from '../../Images/fb.png';
import ig from '../../Images/ig.png';

class About extends Component {
  render() {
    return (
          <div id="about" className="about">
              {/* <h2 className="aboutH2">ABOUT</h2> */}
              {/* <img src={family} className="familyPhoto"></img> */}
              {/* <p className="aboutCard">
                Musician and marketing professional turned software developer. 
                I'm a creative individual with a passion for technology. 
                When I'm not geeking out on the newest effects pedals or building apps, 
                you can find me playing with one of my bands, making food with my wife, 
                or cheering on one of the many (usually disappointing) Minnesota sports teams. 
              </p> */}
              <div class="aboutCards">
                  <div className="left-about">
                  <h2 className="aboutH2">ABOUT</h2>
                      <p className="aboutText">
                      My name is Brady! 
                      As a musician and marketing professional turned software developer, 
                      I'm a creative individual with a passion for technology.</p>
                      <p className="aboutText">
                      I have extensive experience with Node.js, jQuery, React/Redux,
                      Express, Python, Flask, PostgreSQL, HTML, CSS, and Material UI. </p>
                      <p className="aboutText">
                      When I'm not geeking out on the newest effects pedals or building apps, 
                      you can find me playing with one of my bands, making food with my wife, 
                      or cheering on one of the many (usually disappointing) Minnesota sports teams.</p>
                      <div className="logoBlock">
                      <a href="https://github.com/bradytrudeau/" target="_blank">
                        <img className="logos" src={github} width="60px"/>
                      </a>
                      <a href="https://www.linkedin.com/in/brady-trudeau-b3941b5b/" target="_blank">
                        <img className="logos" src={linkedin} width="60px"/>
                      </a>
                      <a href="https://www.facebook.com/brady.r.trudeau/" target="_blank">
                        <img className="logos" src={fb} width="60px"/>
                      </a>
                      <a href="https://www.instagram.com/bradytrudeau/" target="_blank">
                        <img className="logos" src={ig} width="60px"/>
                      </a>
                      </div>
                  </div>
                  <div className="right-about">
                      <img src={family} className="smallFamilyPhoto"></img>
                      {/* <p className="aboutP">
                      <b>Brady Trudeau</b>
                      <br></br>
                      Software Developer</p> */}
                  </div>
              </div>
          </div>
    );
  }
}

export default About;