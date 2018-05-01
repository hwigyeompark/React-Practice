import React,{Component} from 'react';

class DigitOne extends Component{
    state = {
        circle : '○'
    };

    componentWillMount(){}

    componentDidMount(){}

    componentWillReceiveProps(nextProps){}

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps');
        console.log(nextProps);
        console.log(prevState);
        return {
            circle:nextProps.display_val === '0' ? '○':'●'
        }
    }

    shouldComponentUpdate(nextProps, nextState){}

    componentWillUpdate(nextProps, nextState){}

    componentDidUpdate(nextProps, nextState){
        console.log('componentDidUpdate');
    }

    render(){
        return(
            <span>
                {this.state.circle}
            </span>
        );
    }
}

export default DigitOne;