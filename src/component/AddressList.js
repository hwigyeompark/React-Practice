import React, {Component} from 'react';
import request from 'superagent';

class AddressList extends Component {
    componentDidMount(){
        request.get('http://localhost:8081/user').then(response => {
            this.setState({users:response.body, error:null});
        }).catch(error => this.setState({users:null, error:error}));
    }
    addBtnClick = e => {
      request.post('http://localhost:8081/user')
          .set('Content-type', 'application/json')
          .send({username:'HwiGyeom', email:'phg@dgsw', phone:'010-1234-5678'})
          .then(response => console.log(response.body))
          .catch(err => console.log(JSON.stringify(err)));
    };
    render(){
        return(
          <div>
            <button onClick={this.addBtnClick}>사용자 추가</button>
          </div>
        );
    }
}
export default AddressList;