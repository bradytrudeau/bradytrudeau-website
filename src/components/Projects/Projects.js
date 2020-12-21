import React, { Component } from 'react';
import './Projects.css';
import click from '../../Images/click.png';
import steps from '../../Images/steps.png';



class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects">
            <div class="projectsCards">
                  <div className="left-projects">
                  <h2 className="projectsH2">PROJECTS</h2>
                    <a href="https://github.com/bradytrudeau/click-app" target="_blank">
                        <img src={click} className="projectVideo"></img>
                    </a>
                    <a href="https://github.com/Playworks/playworks-step-challenge" target="_blank">
                        <img src={steps} className="projectVideo"></img>
                    </a>
                  </div>
                  <div className="right-projects">
                    <h3 className="projectsH3Top">Click! Metronome App</h3>
                    <p className="projectsP">
                      As a musician, I've used hundreds of different tools to help hone my craft. 
                      Of all of these tools, the most important has been the metronome. 
                      I've used dozens of different kinds of metronomes, 
                      but have always had an issue with their inability to save a setlist of tempos  
                      and the limited number of sound options they have. 
                      For this reason, I've created the Click! Metronome App.
                      <a className="videoLink" href="https://youtu.be/FPe3gaOlHdg" target="_blank"> Click here</a> for a demo of the app. Enjoy!
                    </p>
                    <h3 className="projectsH3Bottom">Playworks Step Challenge App</h3>
                    <p className="projectsP"> 
                      The Playworks Step Challenge App is a full stack mobile-first application that allows users to 
                      create or join a team, log steps, and view team and user statistics. 
                      Application allows users to upload images based on challenges that are assigned by the Playworks admins. 
                      These images will be displayed in multiple image feeds to encourage user interaction. 
                      When a team is created by a user, that user is a “captain” giving that user the ability to remove users 
                      from the team and approve or deny photos that are uploaded by the team members. 
                    </p>
                  </div>
              </div>

      </div>
    );
  }
}

export default Projects;