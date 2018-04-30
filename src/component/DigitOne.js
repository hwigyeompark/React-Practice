import React,{Component} from 'react';

class DigitOne extends Component{
    render(){
        return(
            <div>
                <span>{this.props.value === '0' ? '○':'●'}</span>
            </div>
        );
    }
}

export default DigitOne;