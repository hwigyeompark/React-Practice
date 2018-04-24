import React, {Component} from 'react';
export class TodoItem extends Component {
    static defaultProps = {
        itemName : "No NAME"
    };
    render(){
        return(
          <div>
              <div>{this.props.itemName}</div>
          </div>
        );
    }
}
class  TodoList extends Component {
    render(){
        const named = ["박휘겸", "추은지",  "이상구", "이소진"];
        //const  email = ["phpg@dgsw.hs.kr", "chu@naver.com", "sang9@gmail.com", "zizoziiiiin@naver.com"];
        return(
            <div>
                {
                    named.map((item) => <TodoItem itemName={item}/> )
                }
            </div>
        );
    }
}

export default TodoList;