import React from 'react';
import BackPage from './BackPage';
import { Link } from 'react-router-dom';


function imgReact () {
  return (
    <div>

     <Link to="/"> <BackPage/>  </Link>

     <img src=" https://storage.googleapis.com/zingchart-blog/zing-content/2016/06/react-1.png"/>
     
    </div>
  );
}
export default imgReact;