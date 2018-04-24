import React from 'react';
import img1 from '../img/1.jpg';

class ContactItem extends React.Component{
    static defaultProps = {
        name : 'NO Name',
        price : 'No Price',
        pic : 'No pic'
    }
    render(){
        const styles = {
            container: {
              border : '1px solid #555',
              borderRadius : '20px',
              width : '30%',
              height : '300px',
              margin : '0 auto',
              padding : '50px',
            },
            picStyle : {
                width : "250px",
                height : "250px",
                backgroundImage : `url(${this.props.pic})`,
                backgroundSize : 'contain',
                backgroundRepeat : 'no-repeat',
                borderRadius : '50%'
            },
            align : {
                fontSize : '1.2em',
                display : 'inline-block',
                verticalAlign : 'middle'
            }
        };
        return(
            <div style={styles.container}>
                <div style={styles.picStyle}/>

                <div style={styles.align}>
                    <div style={{fontSize:'1.5em'}}>Name : {this.props.name}</div>
                    <div>Price : {this.props.price}</div>
                </div>
            </div>
        )
    }
}
class ContactList extends React.Component{
    render(){
        const contacts = [
            {
                name : '공차 초코스무디',
                price : '4,500',
                pic : ''
            },
            {
                name : '',
                price : '',
                pic : ''
            },
            {
                name : '',
                price : '',
                pic : ''
            }
        ];
        return(
            <div>
                {
                    contacts.map(contact => <ContactItem name={contact.name} price={contact.price} pic={contact.pic}/>)
                }
            </div>
        )
    }
}
export default ContactList;