import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        {<section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>I have a passion for Code, Good Food, Good People and Traveling!</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>KEVIN CHOI<br />
                    <span></span><br />
                      Miami, FL US
            </span><br />
                    <span>kevinyoungchoi@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="/KevinFullStackDevResume.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
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