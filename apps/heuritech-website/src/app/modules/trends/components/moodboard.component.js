import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getMoodboard } from '../trends.selectors';
import { unsetMoodboard } from '../trends.actions';
import Masonry from './atoms/masonry.component';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  border: '2px solid #000',
  p: 4
};

export function Moodboard() {
  const dispatch = useDispatch();
  const { visible, images, name } = useSelector(getMoodboard);

  return (
    <Modal
      keepMounted
      open={visible}
      onClose={() => dispatch(unsetMoodboard())}
      aria-labelledby="moodboard-title"
      aria-describedby="moodboard-description"
    >
      <Paper sx={style}>
        <Typography id="moodboard-title" variant="h6" component="h2">
          {name}
        </Typography>
        <Masonry images={images} />
      </Paper>
    </Modal>
  );
}
