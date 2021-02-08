import React, { Component } from 'react';
import HeaderComponent from './Header/HeaderComponent';
import Sidebar from './Sidebar/Sidebar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Main from './Main/Main';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {sideOpen: true};
      }
    
      handleToggle = () => this.setState({sideOpen: !this.state.sideOpen});
    render() {
        return (
            <div>
                <MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}>
                    <HeaderComponent toggleSideBar={this.handleToggle}/>
                    <Sidebar toggleSideBar={this.handleToggle} isOpen={this.state.sideOpen}/>
                    <Main/>
                </MuiThemeProvider>
               
            </div>
        );
    }
}

export default Dashboard;