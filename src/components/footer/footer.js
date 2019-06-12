import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        {<footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href="https://www.facebook.com/choik305"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.linkedin.com/in/kevinchoi305/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/choik305"><i className="fa fa-github" /></a></li>
              </ul>
              <ul className="copyright">
                <li>© Copyright 2019 Kevin Choi</li>
                <li>Design by <a title="Kevin Choi" >Kevin Choi</a></li>
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer> 
        }
                
      </React.Fragment>
    );
  }
}