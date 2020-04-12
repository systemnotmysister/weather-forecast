import React from "react";
import { Row, Col} from 'antd';

function Foo(props:any) {
  console.log(props.cityListItem);
  
  return (
    <div>
    {props.cityListItem.map((it:any) => {
     return( <Row>
         <Col span={12}> {it.name} </Col>
         <Col span={12}> {it.name} </Col>
      </Row> );
     })}
 </div> 
  );
}
export default Foo;