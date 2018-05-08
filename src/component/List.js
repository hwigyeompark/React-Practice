import React, {Component} from 'react';
import request from 'superagent';

class List extends Component {
    render(){
        return(
            <div>
                <ul>
                    <li>{this.props.username}</li>
                    <li>{this.props.email}</li>
                    <li>{this.props.phone}</li>
                </ul>
            </div>
        );
    }
}
export default List;