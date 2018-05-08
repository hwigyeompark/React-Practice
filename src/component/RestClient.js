import React, {Component} from 'react';
import request from 'superagent';

class RestClient extends Component{
    state = {
        users : null,
        error : null
    };
    componentDidMount(){
        request.get('http://localhost:8080/user').then(response => {
            this.setState({users:response.body, error:null});
        }).catch(error => this.setState({users : null, error : error}));
    }
    handleAddClick = e => {
        request.post('http://localhost:8080/user')
            .set('Content-type', 'application/json')
            .send({username:'ABCD', email:'abc@dgsw'})
            .then(response => console.log(response.body))
            .catch(err => console.log(JSON.stringify(err)));
    };
    render(){
        return(
            <div>
                <button onClick={this.handleAddClick}>사용자 추가</button>
                <div>{JSON.stringify(this.state.users)}</div>
            </div>
        );
        if (this.state.error != null)
        return(
            <div>
                <button onClick={this.handleAddClick}>사용자 추가</button>
                <ul>
                    {this.state.users.map(item =>
                    <li key={item.idx}>{item.username} / {item.email}</li>)
                }</ul>
            }</div>
        );
    }
}
export default RestClient;