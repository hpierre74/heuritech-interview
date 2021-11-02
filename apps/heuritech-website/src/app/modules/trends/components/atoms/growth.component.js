import Typography from '@mui/material/Typography';

const growthStyles = {
  padding: '8px',
  color: 'green'
};

export const Growth = ({ growth }) => (
  <Typography
    sx={growthStyles}
    color="text.secondary"
    data-testid="trend-growth"
  >
    {Math.floor(growth * 100)}%
  </Typography>
);
