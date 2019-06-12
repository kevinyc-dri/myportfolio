import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        
        <div>
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Game of Thrones Project</h3>
                  <p className="info">Project Manager <span>•</span> <em className="date">April 2019</em></p>
                  <p>
                    HTML, CSS, and React web application using a Game of Thrones API. Informs and refreshes character information for upcoming season. 
          </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Cup of Sugar</h3>
                  <p className="info">Web Developer <span>•</span> <em className="date">March 2019</em></p>
                  <p>
                    Ruby of Rails, Twilio Chat. Web app to prevent and stop product over consumption within apartment buildings. 
          </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}


          <section id="portfolio">
            <div className="row">
              <div className="twelve columns collapsed">
                <h1>Check Out Some of My Works.</h1>
                {/* portfolio-wrapper */}
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-01" title>
                        <img alt src="images/portfolio/coffee.jpg" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Cup of Sugar</h5>
                            <p>Pitch Night</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div> {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-02" title>
                        <img alt src="images/portfolio/gothomepage.jpg" style={{height: 215}} />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Game of Thrones</h5>
                            <p>Team White Walker C32</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div> {/* item end */}
                  
                </div> {/* portfolio-wrapper end */}
              </div> {/* twelve columns end */}
              {/* Modal Popup
	      --------------------------------------------------------------- */}
              <div id="modal-01" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt />
                <div className="description-box">
                  <h4>Cup of Sugar</h4>
                  <p>Ruby of Rails, Twilio Chat. Web app to prevent and stop product over consumption within apartment buildings.</p>
                  <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
                </div>
                <div className="link-box">
                  <a href="https://boiling-tundra-57022.herokuapp.com/users/sign_in">Link</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>{/* modal-01 End */}
              <div id="modal-02" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="./images/portfolio/gothomepage.jpg" alt />
                <div className="description-box">
                  <h4>Game of Thrones</h4>
                  <p>HTML, CSS, and React web application using a Game of Thrones API. Informs and refreshes character information for upcoming season.</p>
                  <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
                </div>
                <div className="link-box">
                  <a href="https://wyn-got.herokuapp.com/Characters">Link</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>{/* modal-02 End */}
              
            </div> {/* row End */}
          </section> {/* Portfolio Section End*/}

          {/* Skills
----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <p>HTML5, CSS, JavaScript, React, SQL, jQuery, PosGres, Postman, CRUD, Ruby on Rails, Node.js, SCRUM Master, Docker, Kubernetes. 
      </p>
              <div className="bars">
                <ul className="skills">
                  <li><span className="bar-expand photoshop" /><em>HTML</em></li>
                  <li><span className="bar-expand illustrator" /><em>CSS</em></li>
                  <li><span className="bar-expand wordpress" /><em>JavaScript</em></li>
                  <li><span className="bar-expand css" /><em>React</em></li>
                  <li><span className="bar-expand html5" /><em>Ruby on Rails</em></li>
                  <li><span className="bar-expand jquery" /><em>Node.js</em></li>
                </ul>
              </div>{/* end skill-bars */}
            </div> {/* main-col end */}
          </div> {/* End skills */}
          {/* Resume Section End*/}
        </div>

    
      </React.Fragment>
    );
  }
}