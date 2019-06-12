import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        {<section id="resume">
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>University of Nevada, Las Vegas</h3>
                  <p className="info">B.A. Hotel Management <span>•</span> <em className="date">June 2008</em></p>
                  <p>
                   UNLV is a doctoral-degree-granting institution of more than 30,000 students and 3,500 faculty and staff that is recognized as “very high research activity” by the Carnegie Classification of Institutions of Higher Education. UNLV offers a broad range of respected academic programs and is on a path to join the top tier of national public research universities. The university is committed to recruiting and retaining top students and faculty, educating the region's diversifying population and workforce, driving economic activity through increased research and community partnerships, and creating an academic health center for Southern Nevada.
          </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Wyncode Academy</h3>
                  <p className="info">Full Stack Web Development Certificate <span>•</span> <em className="date">March 2019</em></p>
                  <p>
                   Wyncode’s full stack web development immersive focuses on JavaScript, HTML, Rails, jQuery, Ruby, CSS, and React.js. Their front end web development program focuses on JavaScript, HTML, jQuery, CSS, and React.js. On top of technical skills, Wyncode teaches soft skills with a focus on professional development.
                  </p>
                </div>
              </div> 
            </div> 
          </div> 
        </section>
}
        
      </React.Fragment>
    );
  }
}