import React, { Component } from 'react';

export class Sidebar extends Component {

    render() {

        return (
            <div className='sidebar'>
                <nav>
                    <a href='./static/schroeder-joseph-web-developer-resume.pdf' target='_blank'><i className='fa fa-file-pdf-o' aria-hidden='true' /> Résumé</a>
                    <a href='https://www.linkedin.com/in/joeyschroeder' target='_blank'><i className='fa fa-linkedin-square' aria-hidden='true' /> LinkedIn</a>
                    <a href='https://github.com/joeyschroeder' target='_blank'><i className='fa fa-github' aria-hidden='true' /> GitHub</a>
                    <a href='https://joeyschroeder.bandcamp.com' target='_blank'><i className='fa fa-bandcamp' aria-hidden='true' /> Bandcamp</a>
                    {/* <button><i class='fa fa-envelope' aria-hidden='true' /> Contact</button> */}
                </nav>
            </div>
        );
    }
}
