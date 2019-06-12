import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
        {<section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1><span>Client Testimonials</span></h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>Never stop learning!</p>
                        <cite>Wyncode Academy</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>Kevin is a hard working and dedicated individual. He is passionate about technology having recently made the career transition to dev and scrum work. Kevin has a valuable background of running a retail clothing company in Wynwood as well as hospitality.
                </p>
                        <cite>Johanna Mikkola Co-Founder of Wyncode Academy</cite>
                      </blockquote>
                    </li> 
                  </ul>
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