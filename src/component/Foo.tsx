import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Row, Col} from 'antd';
import 'antd/dist/antd.css';

function Foo(props:any) {
  return (
    <div>
    {props.cityListItem.map((it:any) => {
     return (
       <Router>
         <Link to={`/${it.name}`}>
           <Row>
             <Col span={2}> {it.name} </Col>
               <Col span={2}> <img height = "20" src =  
                 {it.sunshine === 50 ? "https://image.flaticon.com/icons/svg/861/861059.svg":
                   it.sunshine > 50 ? "https://image.flaticon.com/icons/svg/979/979585.svg" :
                     it.sunshine < 50 ? "https://image.flaticon.com/icons/svg/148/148828.svg": "https://image.flaticon.com/icons/svg/178/178338.svg" }>
                 </img>
               </Col> 
             <Col span={2}>{it.temp} </Col>
           </Row>
         </Link>
   </Router>
 );
     })}
    </div> 
  );
}
export default Foo;
