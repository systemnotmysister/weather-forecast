import React from 'react';
import CityId from './CityId';
import {
Link} 
from "react-router-dom";
import { Row, Col} from 'antd';
import 'antd/dist/antd.css'

const cityArr = (props:any) => {
    return (
<div>
    {props.CityId.map((it: { name: string; }) => {
      return (
        <Link to={`/${it.name}`}>
            <Row> 
              <Col span={2}> {it.name} </Col>
           </Row>
      </Link>
 );
})}
</div> 
);
}
export default cityArr;
