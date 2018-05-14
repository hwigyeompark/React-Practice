import React, {Component} from 'react';
import request from 'superagent';
import List from "./List";
import "../css/style.css";
import AddList from "./AddList";


let list = [
    {name:"HwiGyeom", email:"phg@dgsw", phone:"010-1234-5678"},
    {name:"gwiyomi", email:"ggg@dgsw", phone:"010-7899-7895"},
    {name:"ong", email:"ongyeom@dgsw", phone:"010-9521-8965"},
    {name:"hahaha", email:"haha@dgsw", phone:"010-3245-9856"}
];

class AddressList extends Component {
    constructor() {
        super();
        this.state = {
            list: list
        }
    }

    addUser(user) {
        let list = this.state.list;
        list.push(user);
        this.setState({
            list: list
        })
    }

    render() {
        return (
            <div>
                <h1>연락처</h1>
                <List list={this.state.list}/>
                <AddList list={this.state.list} addList={this.addList.bind(this)}/>
            </div>
        )
    }
}
export default AddressList;