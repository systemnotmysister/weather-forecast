import React from "react";
import { cityListItem } from "./CityListItem";
import { DatePicker } from 'antd';
import { Row, Col} from 'antd';



const foo = () => {
  return (
   <div>
     {cityListItem.map((it) => {
       <Row>
          <Col span={12}> {it.name} </Col>
          <Col span={12}> {it.name} </Col>
       </Row> 
      }}
  </div> 
  )
}
