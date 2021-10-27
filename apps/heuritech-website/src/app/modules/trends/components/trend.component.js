import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, CardMedia, Grid, CardActions, CardContent } from '@mui/material';
import Menu from '../../../components/menu.component';
import { Growth } from './atoms/growth.component';
import { Name } from './atoms/name.component';

import { getTrendsView } from '../trends.selectors';
import { TRENDS_VIEWS } from '../trends.constants';
import {
  addToFavorites,
  deleteFromFavorites,
  fetchTrendMoodboard
} from '../trends.effects';

const hoverStyles = {
  display: 'block',
  position: 'absolute',
  top: '16px',
  right: '8px',
  width: 'unset'
};

const cardStyles = {
  maxWidth: 345,
  position: 'relative',
  '&:before': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    content: '""',
    background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,1) 100%)'
  },
  '&:hover > .actions': hoverStyles
};

const contentStyle = {
  padding: 0,
  display: 'flex',
  position: 'absolute',
  bottom: '8px',
  right: 0,
  left: 0,
  justifyContent: 'space-between',
  alignItems: 'end',
  '&:last-child': { padding: 0 }
};

export const TrendTile = ({ name, image, id, growth, is_favorite }) => {
  const view = useSelector(getTrendsView);
  const isFavorite = view === TRENDS_VIEWS.favorites || is_favorite;

  const dispatch = useDispatch();

  const onMenuClick = useCallback(
    () =>
      isFavorite
        ? dispatch(deleteFromFavorites(id))
        : dispatch(addToFavorites(id)),
    [id, isFavorite, dispatch]
  );

  const onTileClick = () => dispatch(fetchTrendMoodboard({ id, name }));

  const options = [
    {
      text: isFavorite ? 'Remove from collection' : 'Add to collection',
      onClick: onMenuClick
    }
  ];

  return (
    <Grid
      component="li"
      item
      xs={6}
      sm={4}
      md={3}
      lg={3}
      xl={2}
      data-testid={`trend-item`}
    >
      <Card data-testid="trend-card" sx={cardStyles} onClick={onTileClick}>
        <CardMedia
          component="img"
          height="200px"
          image={`https://images.heuritech.com/${image}`}
          alt={name}
        />
        <CardActions
          className="actions"
          sx={{
            display: 'none',
            '&:hover': hoverStyles
          }}
        >
          <Menu options={options} />
        </CardActions>
        <CardContent sx={contentStyle}>
          <Name name={name} />
          <Growth growth={growth} />
        </CardContent>
      </Card>
    </Grid>
  );
};
