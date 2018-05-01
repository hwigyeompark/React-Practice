import React, {Component, Fragment} from 'react';

class Input extends Component{
    state = {
        input_value:''
    };
    handleChange = (e) => {
      this.setState({
          input_value : e.target.value
      })
    };
    render(){
        return(
            <Fragment>
                <input placeholder={this.props.placeholder} value={this.state.input_value} onChange={this.handleChange}/>
                <div>{this.state.input_value}</div>
            </Fragment>
        );
    }
}
export default Input;