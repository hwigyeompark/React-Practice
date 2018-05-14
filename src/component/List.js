import React, {Component} from 'react';
import request from 'superagent';
import AddressList from "./AddressList";
import Person from "./Person";

class List extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render(){
        return(
            <div>
                <ul className="list">
                    return <Person person = {person}/>
                </ul>
            </div>
        );
    }
}
export default List;