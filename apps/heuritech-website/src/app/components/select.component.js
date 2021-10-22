import * as React from 'react';
import _get from 'lodash/get';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MUISelect from '@mui/material/Select';

export function Select({ title, options }) {
  const [label, setLabel] = React.useState(_get(options, '0.text'));

  const handleChange = (event) => {
    setLabel(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <MUISelect
        value={label}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': title }}
      >
        {options.map(({ text, onClick }) => (
          <MenuItem key={text} onClick={onClick} value={text}>
            {text}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
}
