import React from 'react';
import Vidflix from '../images/VidFlix.png';
import Restaurant from '../images/Little-Lemon-Restaurant.png';
import Weather from '../images/Weather-App.png';
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container mt-3">
        <h1 className="text-center-projects">Projects</h1>
        <hr className="line" />
        <div className="row">

          {/* Vidflix */}
          <div className="col-lg-4 mt-4">
            <div className="card">
              <img className="card-img-top" src={Vidflix} alt="Rental Video Store" />
              <div className="card-body">
                <h4 className="card-title">VidFlix</h4>
                <div className="text-center">
                  <a href="https://github.com/javierlok95/VidFlix" target="blank" className="btn btn-success">VIEW PROJECT</a>
                </div>
              </div>
            </div>
          </div>

          {/* restaurant app */}
          <div className="col-lg-4 mt-4">
            <div className="card">
              <img className="card-img-top" src={Restaurant} alt="Little Lemon Restaurant" />
              <div className="card-body">
                <h4 className="card-title">Restaurant Menu App</h4>
                <div className="text-center">
                  <a href="https://github.com/javierlok95/Capstone-Project/tree/main/capstoneproject" target="blank" className="btn btn-success">VIEW PROJECT</a>
                </div>
              </div>
            </div>
          </div>

          {/* weather app */}
          <div className="col-lg-4 mt-4">
            <div className="card portfolioContent">
              <img className="card-img-top" src={Weather} alt="Weather App" />
              <div className="card-body">
                <h4 className="card-title">Weather App</h4>
                <div className="text-center">
                  <a href="https://github.com/javierlok95/weather-app" target="blank" className="btn btn-success">VIEW PROJECT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;