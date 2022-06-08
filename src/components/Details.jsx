import React from 'react';
import './details.css';
const Details = (props) => {
 var name= props.name;
  return (
     <>
    {name === "Muhammad Mehadi" ? <div className='details-section'>
    <h1>{props.name}</h1>
    <h3>{props.age} years old.</h3>
  </div> : <div></div>}
  </>
  )
}

 

export default Details;