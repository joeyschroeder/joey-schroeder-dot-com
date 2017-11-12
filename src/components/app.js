import React, { Component } from 'react';

import { Sidebar } from './sidebar';
import { Splash } from './splash';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarActive: false
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    componentDidMount() {
        const event = new CustomEvent('appReady', { bubbles: true, cancelable: false });
        document.dispatchEvent(event);
    }

    toggleSidebar() {
        const { sidebarActive } = this.state;
        this.setState({ sidebarActive: !sidebarActive });
    }

    render() {
        const { sidebarActive } = this.state;

        return (
            <div className={`app ${sidebarActive ? 'app--sidebar-active' : ''}`}>
                <Splash toggleSidebar={this.toggleSidebar} />
                <Sidebar />
            </div>
        );
    }
}
