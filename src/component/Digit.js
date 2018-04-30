import React,{Component} from 'react';

class Digit extends Component{
     binaryShape = (num) => {
        const binary = parseInt(num, 10).toString(2).padStart(4, '0');
        let result = '';
        for (let i = 0; i< binary.length; i++){
            result += binary.substr(i, 1) === '0' ? '○':'●';
        }
        return result;
    };
    render(){
        return(
            <div>
                <div>{this.binaryShape(this.props.value)}</div>
            </div>
        );
    }
}

export default Digit;