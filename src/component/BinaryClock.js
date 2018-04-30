import React,{Component} from 'react';

class BinaryClock extends Component{
    state = {
        h:'0000', h1:'0000',
        m:'0000', m1:'0000',
        s:'0000', s1:'0000',
    };
    constructor(props){
        super(props);

        setInterval(this.binary, 1000);
    }
    binary = () => {
        const now = new Date();
        this.setState({
            h : this.binaryShape(now.getHours().toString().padStart(2, '0').substr(0, 1)),
            h1 : this.binaryShape(now.getHours().toString().padStart(2, '0').substr(-1)),
            m : this.binaryShape(now.getMinutes().toString().padStart(2, '0').substr(0, 1)),
            m1 : this.binaryShape(now.getMinutes().toString().padStart(2, '0').substr(-1)),
            s : this.binaryShape(now.getSeconds().toString().padStart(2, '0').substr(0, 1)),
            s1 : this.binaryShape(now.getSeconds().toString().padStart(2, '0').substr(-1))
        });
    };

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
                <div>{this.state.h}</div>
                <div>{this.state.h1}</div>
                <div>{this.state.m}</div>
                <div>{this.state.m1}</div>
                <div>{this.state.s}</div>
                <div>{this.state.s1}</div>
            </div>
        );
    }
}

export default BinaryClock;