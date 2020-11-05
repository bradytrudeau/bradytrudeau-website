import React, { Component } from 'react';
import './Projects.css';
import click from '../../Images/click.png';
import movies from '../../Images/movies.png';



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
                    <a href="https://github.com/bradytrudeau/movie-sagas" target="_blank">
                        <img src={movies} className="projectVideo"></img>
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
                  <h3 className="projectsH3Bottom">Popular Movies App</h3>
                    <p className="projectsP"> 
                        The entertainment industry is a multi-billion dollar industry that has a ton of
                        influence on people around the world. The Popular Movies App is an app designed to help
                        fans of movies keep track of their favorite flicks. It features movie posters, 
                        movie titles, genres, and a description of each movie. Users can input their favorites
                        into the app for quick recall later. 
                    </p>
                  </div>
              </div>

      </div>
    );
  }
}

export default Projects;