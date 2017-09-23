import { Component, h } from 'preact';

import PropTypes from 'prop-types';

export class Sidebar extends Component {

    render() {

        return (
            <div className='sidebar'>
                <nav>
                    <a href='./pdfs/schroeder-joseph-web-developer-resume.pdf' target='_blank'><i class='fa fa-file-pdf-o' aria-hidden='true' /> Résumé</a>
                    <a href='https://www.linkedin.com/in/joeyschroeder' target='_blank'><i class='fa fa-linkedin-square' aria-hidden='true' /> LinkedIn</a>
                    <a href='https://github.com/joeyschroeder' target='_blank'><i class='fa fa-github' aria-hidden='true' /> GitHub</a>
                    {/* <button><i class='fa fa-envelope' aria-hidden='true' /> Contact</button> */}
                </nav>
            </div>
        );
    }
}
