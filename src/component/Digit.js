import React,{Component} from 'react';
import DigitOne from "./DigitOne";

class Digit extends Component{
     binaryShape = (num) => parseInt(num, 10).toString(2).padStart(4, '0');

    render(){
        return(
            <div>
                <DigitOne value={this.binaryShape(this.props.value).substr(0, 1)}/>
                <DigitOne value={this.binaryShape(this.props.value).substr(1, 1)}/>
                <DigitOne value={this.binaryShape(this.props.value).substr(2, 1)}/>
                <DigitOne value={this.binaryShape(this.props.value).substr(3, 1)}/>
            </div>
        );
    }
}

export default Digit;