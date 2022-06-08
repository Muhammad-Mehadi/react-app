import React from 'react';
import './form.css';
const Form = () => {
  return (
    <div className='form-section'>
        
        <form action="" className='form'>
        <h4>Form Design</h4>
            <input type="text" placeholder='Enter Name' />
            <input type="email" placeholder='Enter Email' />
            <input type="text" placeholder='Enter Password' />
            <button>SUBMIT</button>
        </form>
    </div>
  )
}

export default Form