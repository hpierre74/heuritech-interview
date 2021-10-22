import * as React from 'react';
import _get from 'lodash/get';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export function Toggle({ options, defaultValue }) {
  const [value, setValue] = React.useState(
    defaultValue || _get(options, '0.text')
  );

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <ToggleButtonGroup
      sx={{ bgcolor: 'primary.main' }}
      value={value}
      exclusive
      onChange={handleChange}
    >
      {options.map(({ text, onClick }) => (
        <ToggleButton
          key={text}
          variant="contained"
          onClick={onClick}
          value={text}
          sx={{
            bgcolor: 'grey.light',
            color: 'black'
          }}
        >
          {text}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
