import React, {Component, Fragment} from 'react';
import Input from "./input";
import MyButton from "./MyButton";

class ContactForm extends Component{
    render(){
        return(
          <Fragment>
              Name <Input placeholder="name"/>
              Phone<Input placeholder="phone"/>
              Zip <Input placeholder="zip"/>
              <MyButton title="버튼"></MyButton>
          </Fragment>
        );
    }
}
export default ContactForm;