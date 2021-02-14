import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''

        };
    }

    handleInputChange = (event) => {
        console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        }, this.showState);

    }
    showState = () => {
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    Registration Form
                <form>
                        <TextField
                            hintText="Name"
                            floatingLabelText="Name"
                            name='name'
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            hintText="Email"
                            floatingLabelText="Email"
                            name='email'
                            onChange={this.handleInputChange}
                        />
                    </form>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Register;