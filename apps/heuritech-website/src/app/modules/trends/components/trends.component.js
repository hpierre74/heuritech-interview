import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { getTrendsItems } from '../../trends/trends.selectors';
import { TrendTile } from './trend.component';

export const TrendsList = () => {
  const items = useSelector(getTrendsItems);

  return (
    <Grid
      component="ul"
      sx={{
        paddingInlineStart: 'unset',
        listStyleType: 'none',
        marginBlockStart: 'unset',
        marginBlockEnd: 'unset'
      }}
      container
      spacing={4}
      data-testid="trends-list"
    >
      {items.map((item, index) => (
        <TrendTile
          key={item.id}
          {...item}
          index={index}
          data-testid={`trend-item-${index}`}
        />
      ))}
    </Grid>
  );
};
