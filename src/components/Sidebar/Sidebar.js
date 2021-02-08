import React, { Component } from 'react';
import styles from './sidebar.css'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { FontIcon, SvgIcon } from 'material-ui';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';


const iconStyles = {
    marginRight: 24,
};
const style = {
    paper: {
      display: 'inline-block',
      float: 'left',
      margin: '16px 32px 16px 0',
    },
    rightIcon: {
      textAlign: 'center',
      lineHeight: '24px',
    },
  };
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {isDoked: true};

    }
    render() {
        return (
            <div>

                <Drawer open={this.props.isOpen} width={200} containerClassName="sidebarContainer" docked={this.state.isDoked}>

                    <FontIcon
                        className="muidocs-icon-action-home"
                        onClick={this.props.toggleSideBar}
                        style={iconStyles}
                    />
                    <SvgIcon style={iconStyles} onClick={this.props.toggleSideBar}>
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                    </SvgIcon>

                    
                        <Menu>
                            <MenuItem className="sideMenu" primaryText="Preview" leftIcon={<RemoveRedEye color='white'/>} />
                            <MenuItem  className="sideMenu" primaryText="Share" leftIcon={<PersonAdd color='white'/>} />
                            <MenuItem  className="sideMenu" primaryText="Get links" leftIcon={<ContentLink color='white'/>} />
                            <Divider />
                            <MenuItem  className="sideMenu" primaryText="Make a copy" leftIcon={<ContentCopy color='white'/>} />
                            <MenuItem  className="sideMenu" primaryText="Download" leftIcon={<Download color='white'/>} />
                            <Divider />
                            <MenuItem  className="sideMenu" primaryText="Remove" leftIcon={<Delete color='white'/>} />
                        </Menu>
                    
                </Drawer>
            </div>
        );
    }
}

export default Sidebar;