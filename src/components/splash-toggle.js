import { Component, h } from 'preact';

import PropTypes from 'prop-types';

export class SplashToggle extends Component {

    render() {
        const { toggleSidebar } = this.props;

        return (
            <button className='splash__toggle' onClick={toggleSidebar}>
                <div>
                    <span />
                    <span />
                    <span />
                </div>
                <div>
                    <span />
                    <span />
                    <span />
                </div>
            </button>
        );
    }
}

SplashToggle.propTypes = {
    toggleSideBar: PropTypes.func
};
