import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

import {
  getTrendsFilters,
  getTrendsTotal,
  getTrendsView
} from '../modules/trends/trends.selectors';
import {
  fetchAllTrends,
  fetchFavorites
} from '../modules/trends/trends.effects';
import { TRENDS_VIEWS } from '../modules/trends/trends.constants';

import { Layout } from '../components/layout.component';
import { TrendsList } from '../modules/trends/components/trends.component';
import { Moodboard } from '../modules/trends/components/moodboard.component';

export function Home() {
  const dispatch = useDispatch();
  const total = useSelector(getTrendsTotal);
  const view = useSelector(getTrendsView);
  const filters = useSelector(getTrendsFilters);

  useEffect(() => {
    if (view === TRENDS_VIEWS.all) dispatch(fetchAllTrends(filters));
    if (view === TRENDS_VIEWS.favorites) dispatch(fetchFavorites(filters));
  }, [dispatch, view, filters]);

  return (
    <Layout>
      <Typography sx={{ p: '16px 0' }} variant="h6" component="h2">
        All trends ({total})
      </Typography>
      <TrendsList />
      <Moodboard />
    </Layout>
  );
}
