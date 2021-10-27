import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

import { getTrendsTotal } from '../modules/trends/trends.selectors';
import { fetchAllTrends } from '../modules/trends/trends.effects';

import { Layout } from '../components/layout.component';
import { TrendsList } from '../modules/trends/components/trends.component';
import { Moodboard } from '../modules/trends/components/moodboard.component';

export function Home() {
  const dispatch = useDispatch();
  const total = useSelector(getTrendsTotal);

  useEffect(() => {
    dispatch(fetchAllTrends());
  }, [dispatch]);

  return (
    <Layout>
      <Typography
        sx={{ p: '16px 0' }}
        variant="h6"
        component="h2"
        data-testid="home-trends-counter"
      >
        All trends ({total})
      </Typography>
      <TrendsList />
      <Moodboard />
    </Layout>
  );
}
