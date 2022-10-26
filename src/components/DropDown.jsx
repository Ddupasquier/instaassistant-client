import React from 'react';
import { Select } from './styled';

function DropDown({ setter, options, name }) {
  return (
    <Select
      name={name}
      required
      // style={{
      //   backgroundColor: 'gray',
      //   borderRadius: '1rem',
      //   padding: '.3rem',
      //   width: '100%',
      // }}
      onChange={(e) => setter(e.target.value)}
    >
      <option value="" style={{ color: 'black' }}>
        Select {name}
      </option>
      {options.map((option, i) => (
        <option key={i} value={option.value} style={{ color: 'black' }}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}

export default DropDown;
