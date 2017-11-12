import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { SplashToggle } from './splash-toggle';

export class Splash extends Component {

    render() {
        const { toggleSidebar } = this.props;

        return (
            <div className='splash'>
                <button className='splash__overlay' onClick={toggleSidebar} />
                <SplashToggle toggleSidebar={toggleSidebar} />
                <div className='splash__container'>
                    <div className='splash__title'>
                        <div className='splash__title__name'>Joey Schroeder</div>
                        <div className='splash__title__job'>
                            <span>Developer//</span>
                            <span>Designer</span>
                        </div>
                    </div>
                    <div className='splash__stripes'>
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
                <div className='splash__copyright'>Copyright © {new Date().getFullYear()} All Rights Totally Reserved.</div>
            </div>
        );
    }
}

Splash.propTypes = {
    toggleSidebar: PropTypes.func
};
