import React, { Component } from 'react';

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <nav>
          <a href="./static/schroeder-joseph-web-developer-resume.pdf" target="_blank">
            <i className="fa fa-file-pdf-o" aria-hidden="true" />
            <span>Résumé</span>
          </a>
          <a href="https://www.linkedin.com/in/joeyschroeder" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/joeyschroeder" target="_blank">
            <i className="fa fa-github" aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <a href="https://joeyschroeder.bandcamp.com" target="_blank">
            <i className="fa fa-bandcamp" aria-hidden="true" />
            <span>Bandcamp</span>
          </a>
          <a href="https://theapacherevolver.bandcamp.com/" target="_blank">
            <i className="fa fa-bandcamp" aria-hidden="true" />
            <span>The Apache Revolver</span>
          </a>
          <a href="https://computerjones.bandcamp.com/" target="_blank">
            <i className="fa fa-bandcamp" aria-hidden="true" />
            <span>Computer Jones</span>
          </a>
          {/* <button><i class='fa fa-envelope' aria-hidden='true' /> Contact</button> */}
        </nav>
      </div>
    );
  }
}
