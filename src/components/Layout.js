import * as React from 'react';
// import {useStyletron} from 'baseui';
// import {
//   Unstable_Grid as Grid,
//   Unstable_Cell as Cell,
// } from 'baseui/layout-grid';
// import {FormControl} from 'baseui/form-control';
// import {Input} from 'baseui/input';
// import Form from './Form';

// export default () => (
//   <Outer>
//     <Grid>
//       <Cell span={2}>
//         <Inner>
//         lorem ipsum dsjdififffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
//         {/* <Form /> */}

//         </Inner>
//       </Cell>
//       <Cell skip={[1, 4, 7]} span={[1, 2, 3]}>
//         <Inner>2</Inner>
//       </Cell>
//     </Grid>
//   </Outer>
// );
// const Outer = ({children}) => {
//   const [css, theme] = useStyletron();
//   return (
//     <div
//       className={css({
//         // background:'red',
//       })}
//     >
//       {children}
//     </div>
//   );
// };
// const Inner = ({children}) => {
//   const [css, theme] = useStyletron();
//   return (
//     <div
//       className={css({
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         // background: theme.colors.accent200,
//         color: theme.colors.accent700,
//         padding: '.25rem',
//       })}
//     >
//       {children}
//     </div>
//   );
// };


import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from '../../node_modules/react-bootstrap';
import { Row, Col, Grid } from '../../node_modules/react-bootstrap';
import Form from './Form';
export default()=>{
  
  return(
<Container>
  <Row>
    <Col>
    <Form /></Col>
    <Col>name</Col>
  </Row>
  </Container>)
  }
// import React from 'react'

// export default function header() {
//     return (
//         <div>
//             <h1 style={heads}>Yatharth</h1>
//         </div>
//     )
// }
//  const heads={
//      background 
//  }
