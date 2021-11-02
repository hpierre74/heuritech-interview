import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { canLoadMore, getTrendsItems } from '../../trends/trends.selectors';
import { LoadMore } from './atoms/loadMore.component';
import { TrendTile } from './trend.component';

export const TrendsList = () => {
  const items = useSelector(getTrendsItems);
  const isLoadMoreButtonVisible = useSelector(canLoadMore);

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
      {isLoadMoreButtonVisible && (
        <Grid sx={{ textAlign: 'center' }} item lg={12} md={12} sm={12} xs={12}>
          <LoadMore />
        </Grid>
      )}
    </Grid>
  );
};
