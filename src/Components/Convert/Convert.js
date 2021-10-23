import React from 'react';
import './Convert.css'


const Convert = ({ onInputChange, onButtonSubmit,OutputChange}) => {
      return (
        <div className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <div >
            <h3 className='main'>Enter Entry in cc</h3>
            <div className='space'>           
                <input 
                    className="mt3 mb3 pa2 input-reset w-100" 
                    id='getinput'
                    type="number" 
                    placeholder='Enter the value'
                    onChange={onInputChange} 
                />
                <div>
                    <button className='gap'
                    onClick={onButtonSubmit}>Convert </button>
                </div>
            </div> 
            <br></br>
            <h3 className='main'>The INR you have pay is ₹{OutputChange}</h3> 
            <div className='space'>           
               {/* <input 
                    className="mt3 pa2 input-reset w-100" 
                    type="text" 
                    placeholder='INR is' 
                />*/}
            </div>     
        </div>    
        </div>  
      );
}

export default Convert;