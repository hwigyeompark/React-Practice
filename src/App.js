import React, { Component } from 'react';
/*import Counter from "./component/Counter";*/
import Clock from "./component/Clock";
import BinaryClock from "./component/BinaryClock";
import ContactForm from "./component/ContactForm";
/*import BinaryClock from "./component/BinaryClock";*/
/*import BinaryClock from "./component/BinaryClock";*/
/*import {TodoItem} from './component/TodoList.js';
import ContactList from "./component/ContactList";*/
import RestClient from "./component/RestClient";

class App extends Component {
  render() {
    return (
        <div>
        <RestClient />
        </div>
    );
  }
}

export default App;
