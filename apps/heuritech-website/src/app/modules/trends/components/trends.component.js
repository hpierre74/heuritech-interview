import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { getTrendsItems } from '../../trends/trends.selectors';
import { TrendTile } from './trend.component';

export const TrendsList = () => {
  const items = useSelector(getTrendsItems);

  return (
    <Grid container spacing={4}>
      {items.map((item) => (
        <TrendTile key={item.id} {...item} />
      ))}
    </Grid>
  );
};
