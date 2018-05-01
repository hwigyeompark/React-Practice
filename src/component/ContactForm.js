import React, {Component, Fragment} from 'react';
import Input from "./input";
import MyButton from "./MyButton";

class ContactForm extends Component{
    state = {
        form_msg:''
    };
    handleClick = e => {
        this.setState({form_msg : new Date().toString()})
    };
    render(){
        return(
            <Fragment>
                Name <Input placeholder="name"/>
                Phone<Input placeholder="phone"/>
                Zip <Input placeholder="zip"/>
                <MyButton title="버튼" buttonClick={this.handleClick}></MyButton>
                <div>{this.state.form_msg}</div>
            </Fragment>
        );
    }
}
export default ContactForm;