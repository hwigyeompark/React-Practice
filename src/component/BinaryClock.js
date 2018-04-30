import React,{Component} from 'react';
import Digit from "./Digit";

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
        const hh = now.getHours().toString().padStart(2, '0');
        const mm = now.getMinutes().toString().padStart(2, '0');
        const ss = now.getSeconds().toString().padStart(2, '0');
        this.setState({
            h : hh.substr(0, 1),
            h1 : hh.substr(-1),
            m : mm.substr(0, 1),
            m1 : mm.substr(-1),
            s : ss.substr(0, 1),
            s1 : ss.substr(-1)
        });
    };
    render(){
        return(
            <div>
                <Digit value={this.state.h} />
                <Digit value={this.state.h1} />
                <Digit value={this.state.m} />
                <Digit value={this.state.m1} />
                <Digit value={this.state.s} />
                <Digit value={this.state.s1} />
            </div>
        );
    }
}

export default BinaryClock;