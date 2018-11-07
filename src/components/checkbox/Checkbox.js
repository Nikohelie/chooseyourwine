import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({type = 'checkbox',name, checked = false, onChange}) =>(
    <input checked={checked} type={type}  name={name} onChange={onChange}/>
);

Checkbox.propTypes ={
    type: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange:PropTypes.func.isRequired
}

export default Checkbox;