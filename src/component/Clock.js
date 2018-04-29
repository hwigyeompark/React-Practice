import React, {Component} from 'react';

class Clock extends Component{
    state = {
        h:0,
        n:0,
        s:0
    };
    constructor(props)  {
        super(props);

        setInterval(this.tick, 1000);
    }
    tick = () => {
        const now = new Date();
        this.setState({
            h : now.getHours().toString().padStart(2, '0'),
            n : now.getMinutes().toString().padStart(2, '0'),
            s : now.getSeconds().toString().padStart(2, '0')
        });
    };

    render(){
        return(
            <div>
                {this.state.h}:{this.state.n}:{this.state.s}
            </div>
        );
    }
}

export default Clock;