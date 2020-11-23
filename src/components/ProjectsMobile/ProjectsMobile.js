import React, { Component } from 'react';
import './ProjectsMobile.css';
import click from '../../Images/click.png';
import movies from '../../Images/movies.png';



class ProjectsMobile extends Component {
  render() {
    return (
      <div id="projects" className="projectsMobile">
            <div class="projectsCardsMobile">
                  <div className="left-projectsMobile">
                  <h2 className="projectsH2Mobile">PROJECTS</h2>
                    <a href="https://github.com/bradytrudeau/click-app" target="_blank">
                        <img src={click} className="projectVideoMobile"></img>
                    </a>
                    <h3 className="projectsH3TopMobile">Click! Metronome App</h3>
                    <p className="projectsPMobile">
                      As a musician, I've used hundreds of different tools to help hone my craft. 
                      Of all of these tools, the most important has been the metronome. 
                      I've used dozens of different kinds of metronomes, 
                      but have always had an issue with their inability to save a setlist of tempos  
                      and the limited number of sound options they have. 
                      For this reason, I've created the Click! Metronome App.
                    <a className="videoLink" href="https://youtu.be/FPe3gaOlHdg" target="_blank"> Click here</a> for a demo of the app. Enjoy!
                    </p>
                    <a href="https://github.com/bradytrudeau/movie-sagas" target="_blank">
                        <img src={movies} className="projectVideoMobile"></img>
                    </a>
                    <h3 className="projectsH3BottomMobile">Popular Movies App</h3>
                    <p className="projectsPMobile"> 
                        The entertainment industry is a multi-billion dollar industry that has a ton of
                        influence on people around the world. The Popular Movies App is an app designed to help
                        fans of movies keep track of their favorite flicks. It features movie posters, 
                        movie titles, genres, and a description of each movie. Users can input their favorites
                        into the app for quick recall later. 
                    </p>
                  </div>
                  <div className="right-projectsMobile">
                  </div>
              </div>

      </div>
    );
  }
}

export default ProjectsMobile;