import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
const axios = require('axios');
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tableData: '',
            istableDataLoaded: false,
            hoverable: true,
            striped: true
        }
    }

    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/todos/")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             console.log(result)
        //             this.setState({
        //                 istableDataLoaded: true,
        //                 tableData: result,
        //             }, this.showTable);
        //         },
        //         (error) => {
        //             this.setState({
        //                 istableDataLoaded: true,
        //                 error
        //             });
        //         }
        //     )
        


            //Post Data
            axios.post('https://gorest.co.in/public-api/users', {
                name: 'Bramajee',
                email: 'abc@gmail.com',
                gender:'Male',

              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

              axios.get('https://gorest.co.in/public-api/users')
              .then(function (response) {
                  // handle success
                  console.log(response);
                  this.setState({
                      istableDataLoaded: true,
                      tableData: response.data.data,
                  }, this.showTable);
              }.bind(this))
              .catch(function (error) {
                  // handle error
                  console.log(error);
                  this.setState({
                      istableDataLoaded: true,
                      error
                  });
              }.bind(this));

    }

    showTable = () => {
        console.log('in show/table' + JSON.stringify(this.state))
    }

    render() {
        return (
            <div>
                {this.state.istableDataLoaded
                    ?
                    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                        <Table>
                            <TableHeader>
                                <TableRow hoverable={this.state.hoverable} striped={this.state.striped}>
                                    <TableHeaderColumn>Name</TableHeaderColumn>
                                    <TableHeaderColumn>Email</TableHeaderColumn>
                                    <TableHeaderColumn>Gender</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {this.state.tableData.map((row) =>
                                    <TableRow>
                                        <TableRowColumn>{row.name}</TableRowColumn>
                                        <TableRowColumn>{row.email}</TableRowColumn>
                                        <TableRowColumn>{row.gender}</TableRowColumn>
                                    </TableRow>
                                )}

                            </TableBody>
                        </Table>
                    </MuiThemeProvider>
                    : <div>
                        <CircularProgress />
                    </div>
                } </div>
        );
    }
}

export default Main;