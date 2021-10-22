import { Growth } from './atoms/growth.component';
import { Card, CardMedia, Grid, CardActions, CardContent } from '@mui/material';
import { Name } from './atoms/name.component';
import Menu from '../../../components/menu.component';
import { addToFavorites, fetchTrendMoodboard } from '../trends.effects';
import { useDispatch } from 'react-redux';

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
  '&:hover > .foo': hoverStyles
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

export const TrendTile = ({ name, image, id, growth }) => {
  const dispatch = useDispatch();
  const onFavorite = () => dispatch(addToFavorites(id));
  const onTileClick = () => dispatch(fetchTrendMoodboard({ id, name }));

  const options = [{ text: 'Add to collection', onClick: onFavorite }];

  return (
    <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
      <Card sx={cardStyles} onClick={onTileClick}>
        <CardMedia
          component="img"
          height="200px"
          image={`https://images.heuritech.com/${image}`}
          alt={name}
        />
        <CardActions
          className="foo"
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
