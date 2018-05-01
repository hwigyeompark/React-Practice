import React, {Component, Fragment} from 'react';

class MyButton extends Component{
    state = {
        btn_msg:''
    };
    handClick = (e) =>{
        this.setState({btn_msg: new Date().toString()});
    };
    render(){
        return(
            <Fragment>
                <button onClick={this.handClick}>{this.props.title}</button>
                <div>{this.state.btn_msg}</div>
            </Fragment>
        );
    }
}
export default MyButton;