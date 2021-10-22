import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { Toggle } from './toggle.component';
import { Select } from './select.component';

import {
  genderOptions,
  geozoneOptions,
  sortByOptions,
  viewOptions
} from '../modules/trends/trends.constants';
import { getTrendsView } from '../modules/trends/trends.selectors';

export function NavBar() {
  const view = useSelector(getTrendsView);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="default" position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            component={Link}
            to="/"
            sx={{
              cursor: 'pointer',
              height: '50px',
              width: '200px',
              background: 'url(../../assets/logo.png) no-repeat',
              backgroundSize: 'contain'
            }}
          />
          <Box sx={{ display: 'flex' }}>
            <Toggle options={viewOptions(dispatch)} defaultValue={view} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>Filters:</Typography>
            <Select title="Sort by ..." options={sortByOptions(dispatch)} />
            <Select title="Gender" options={genderOptions(dispatch)} />
            <Select title="Geozone" options={geozoneOptions(dispatch)} />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
