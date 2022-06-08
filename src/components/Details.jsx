import React from 'react';
import './details.css';
const Details = (props) => {
 
  return (
      <div>
         <h3>{props.details.name}</h3>
         <h5>{props.details.age}</h5>
      </div>
  
  )
}

 

export default Details;