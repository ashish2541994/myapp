import React, { Component } from 'react';
const superagentApi = require('superagent');

class SuperagentComponet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiData: ''
        }
    }
    componentDidMount() {
        superagentApi
            .get('https://gorest.co.in/public-api/users')
            .set('X-API-Key', 'foobar')
            .set('accept', 'json')
            .end((err, res) => {
                console.log(err, res)
            });

        superagentApi
            .post('https://xyz.com/login')
            .send({ username: 'Manny', password: 'cat' }) // sends a JSON post body
            .set('X-API-Key', 'foobar')
            .set('accept', 'json')
            .set('token', 'xyz')
            .end((err, res) => {
                // Calling the end function will send the request
            });
    }
    render() {
        return (
            <div>
                for superagent api
            </div>
        );
    }
}

export default SuperagentComponet;