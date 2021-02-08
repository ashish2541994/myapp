
import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import styles from './header.css'
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
const iconStyles = {
    marginRight: 24,
  };
class HeaderComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <AppBar
                    title="Title"
                    className='custom-appbar'
                    titleStyle={{color:'white'}}
                    onLeftIconButtonClick={this.props.toggleSideBar}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />

            </div>
        );
    }
}

export default HeaderComponent;