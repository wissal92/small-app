import React from 'react';
import './SearchField.css';

const SearchField = ({handleChange}) =>(
    <div className='Input'>
        <input className='Input-field' type='text' placeholder='Enter Your Robot Name' onChange={handleChange}/>
    </div>
)

export default SearchField;