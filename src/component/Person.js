import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.person.name}</li>
                    <li>{this.props.person.email}</li>
                    <li>{this.props.person.phone}</li>
                </ul>
            </div>
        );
    }
}

export default Person;