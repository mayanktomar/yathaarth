import * as React from 'react';
import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import {Textarea} from 'baseui/textarea';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from '../../node_modules/react-bootstrap';
import { Row, Col, Grid } from '../../node_modules/react-bootstrap';
import firebase from './firebase';



export default () => {
  
  
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [message, setMessage] = React.useState('');
  
  const [name1, setName1] = React.useState('');
  const [number1, setNumber1] = React.useState('');
  const [message1, setMessage1] = React.useState('');
  
  return(
    
    <Container fluid={true}>
      <Row>
        <Col>
        <div style={formb}>
    <React.Fragment>
    <FormControl label="Name">
      <Input
        id="input-id"
        value={name}
        onChange={event => setName(event.currentTarget.value)}
      />
      
      
      
    </FormControl>
    <FormControl label="Phone Number">
      <Input
        id="input-id"
        value={number}
        onChange={event => setNumber(event.currentTarget.value)}
      />
      
      
    </FormControl>
    
    <FormControl label="Message">
      <Textarea
        id="textarea-id"
        value={message}
        onChange={event => setMessage(event.currentTarget.value)}
      />
    </FormControl>
    <button style={btnstyle} onClick={event=> {
      setName1(name)
      setNumber1(number)
      setMessage1(message)
      firebase.firestore().collection('formsubmissions').add({
        Name:name,
        PhoneNumber:number,
        Message:message
      })
      setName('')
      setNumber('')
      setMessage('')
    }}>Submit</button>
    </React.Fragment>
    </div></Col>
        <Col><div style={formb}>
          <h2>Your Entries will be shown here..</h2>
          <p><span>Name <br/></span>{name1}</p>
          <p><span>Phone Number <br/></span>{number1}</p>
          <p><span>Message<br/></span>{message1}</p>
          </div></Col>
      </Row>
      </Container>)
      }
  
  // const instyle={
  //   backgroundColor:'white'
  // }
  const btnstyle={
  backgroundColor: '#3333FF',
    padding:'5px',
    color:'white',
    fontSize:'24px'
  }
  
  
  
  


const formb={
  marginTop:'10px',
  backgroundColor:'white',
  padding:'10px',
  textAlign:'center',
  border: '2px solid black',
  height:'100%'
}

// import * as React from 'react';
// import {FormControl} from 'baseui/form-control';
// import {Input} from 'baseui/input';
// export default () => (
//   <React.Fragment>
//     <FormControl label="Input label" caption="Input caption">
//       <Input />
//     </FormControl>
//     <FormControl
//       positive="Positive caption"
//       label="Input label"
//       caption="Input caption"
//     >
//       <Input positive />
//     </FormControl>
//     <FormControl
//       error="Error caption"
//       label="Input label"
//       caption="Input caption"
//     >
//       <Input error />
//     </FormControl>
//   </React.Fragment>
// );