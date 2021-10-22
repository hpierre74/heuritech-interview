import * as React from 'react';
import _noop from 'lodash/noop';
import IconButton from '@mui/material/IconButton';
import MUIMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';

export default function Menu({ options }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose =
    (onClick = _noop) =>
    (event) => {
      event.stopPropagation();
      setAnchorEl(null);
      onClick();
    };

  return (
    <Box
      sx={{
        background: 'white',
        borderRadius: '10%',
        '&:hover': { background: 'white' }
      }}
    >
      <IconButton
        aria-label="more"
        id="menu-button"
        aria-controls="menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <MUIMenu
        id="menu"
        MenuListProps={{
          'aria-labelledby': 'menu-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose()}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        {options.map(({ text, onClick }) => (
          <MenuItem key={text} onClick={handleClose(onClick)}>
            {text}
          </MenuItem>
        ))}
      </MUIMenu>
    </Box>
  );
}
