import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { loadMoreTrends } from '../../trends.actions';

export const LoadMore = () => {
  const dispatch = useDispatch();

  return (
    <Button
      variant="contained"
      onClick={() => dispatch(loadMoreTrends())}
      data-testid="load-more-button"
    >
      Voir plus ...
    </Button>
  );
};
