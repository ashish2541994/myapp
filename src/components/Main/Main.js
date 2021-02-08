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
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        istableDataLoaded: true,
                        tableData: result,
                    }, this.showTable);
                },
                (error) => {
                    this.setState({
                        istableDataLoaded: true,
                        error
                    });
                }
            )
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
                                    <TableHeaderColumn>User ID</TableHeaderColumn>
                                    <TableHeaderColumn>title</TableHeaderColumn>
                                    <TableHeaderColumn>Is Completed</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {this.state.tableData.map((row) =>
                                    <TableRow>
                                        <TableRowColumn>{row.userId}</TableRowColumn>
                                        <TableRowColumn>{row.title}</TableRowColumn>
                                        <TableRowColumn>{row.completed}</TableRowColumn>
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