import React, { Component } from 'react';
/*import Counter from "./component/Counter";*/
import Clock from "./component/Clock";
import BinaryClock from "./component/BinaryClock";
/*import BinaryClock from "./component/BinaryClock";*/
/*import BinaryClock from "./component/BinaryClock";*/
/*import {TodoItem} from './component/TodoList.js';
import ContactList from "./component/ContactList";*/

class App extends Component {
  render() {
    return (
        <div>
          <Clock/>
          <BinaryClock/>
        </div>
    );
  }
}

export default App;
