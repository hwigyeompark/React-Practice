import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num : 0
        };
//arrow funtion안 쓸 때        this.handleClickPlus = this.handleClickPlus.bind(this);
    }
    handleClickPlus = () => {
        this.setState({
            num : this.state.num + 1
        });
    };
    handleClickMinus = () => {
        this.setState({
            num : this.state.num - 1
        });
    };
    render(){
        return(
            <div>
                <div style={{fontSize:'5em'}}>
                    {this.state.num}
                </div>
                <div>
                    <button onClick={this.handleClickPlus}>+</button>
                    <button onClick={this.handleClickMinus}>-</button>
                </div>
            </div>
        );
    }
}
export default Counter;