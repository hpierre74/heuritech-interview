import Typography from '@mui/material/Typography';

const nameStyles = {
  padding: '8px'
};

export const Name = ({ name }) => (
  <Typography sx={nameStyles} color="white">
    {name}
  </Typography>
);
