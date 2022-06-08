import React from 'react';
import './details.css';
const Details = (props) => {
  return (
    <div className='details-section'>
      <h1>{props.name}</h1>
      <h3>{props.age} years old.</h3>
    </div>
  )
}

 

export default Details;