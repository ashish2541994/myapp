import React, { Component } from 'react';

function FregmentComponent(props) {
    
        return (
            <div>
                <React.Fragment>
                <tr>
                        <td>Hello</td>
                        <td>World</td>
                    </tr>
                    <tr>
                        <td>Hello</td>
                        <td>{this.state.name}</td>
                    </tr>
                </React.Fragment>
                    
                
            </div>
        );
    
}

export default FregmentComponent;