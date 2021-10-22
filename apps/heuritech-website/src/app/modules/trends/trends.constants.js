import {
  setTrendsFilter,
  setTrendViews,
  unsetTrendsFilter
} from './trends.actions';
import { trendsOptionsFactory } from './trends.utils';

export const TRENDS_VIEWS = {
  all: 'all',
  favorites: 'favorites'
};

export const viewOptions = trendsOptionsFactory([
  {
    text: TRENDS_VIEWS.all,
    action: setTrendViews,
    param: TRENDS_VIEWS.all
  },
  {
    text: TRENDS_VIEWS.favorites,
    action: setTrendViews,
    param: TRENDS_VIEWS.favorites
  }
]);

export const genderOptions = trendsOptionsFactory([
  {
    text: 'Gender',
    action: unsetTrendsFilter,
    param: 'gender'
  },
  {
    text: 'Female',
    action: setTrendsFilter,
    param: { gender: 'female' }
  },
  {
    text: 'Male',
    action: setTrendsFilter,
    param: { gender: 'male' }
  }
]);

export const sortByOptions = trendsOptionsFactory([
  {
    text: 'Sort by ...',
    action: unsetTrendsFilter,
    param: 'sort_by'
  },
  {
    text: 'Growth',
    action: setTrendsFilter,
    param: { sort_by: 'growth' }
  },
  {
    text: 'Geozone',
    action: setTrendsFilter,
    param: { sort_by: 'geozone' }
  },
  {
    text: 'Gender',
    action: setTrendsFilter,
    param: { sort_by: 'gender' }
  }
]);

export const geozoneOptions = trendsOptionsFactory([
  {
    text: 'Geozone',
    action: unsetTrendsFilter,
    param: 'geozone'
  },
  {
    text: 'Europe',
    action: setTrendsFilter,
    param: { geozone: 'eu' }
  },
  {
    text: 'Brazil',
    action: setTrendsFilter,
    param: { geozone: 'br' }
  },
  {
    text: 'Japan',
    action: setTrendsFilter,
    param: { geozone: 'jp' }
  },
  {
    text: 'USA',
    action: setTrendsFilter,
    param: { geozone: 'us' }
  },
  {
    text: 'China',
    action: setTrendsFilter,
    param: { geozone: 'cn' }
  }
]);
