import React from 'react';
import { useHistory } from 'react-router-dom';
// import './Paid.css';

const Paid = () => {
  let history=useHistory();
      return (
        <div className = "Free">
            <input
                onClick={()=>{history.push('Convert');}}
                className='free'
                type="radio"
            />
            Paid
        </div>
      );
}

export default Paid;