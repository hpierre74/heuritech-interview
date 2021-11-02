import {
  LOAD_MORE_TRENDS,
  SET_TRENDS_FILTER,
  SET_TRENDS_VIEW,
  UNSET_TRENDS_FILTER
} from '../modules/trends/trends.actions';
import { TRENDS_VIEWS } from '../modules/trends/trends.constants';
import {
  fetchAllTrends,
  fetchFavorites,
  fetchMoreTrends
} from '../modules/trends/trends.effects';
import {
  getTrendsFilters,
  getTrendsView
} from '../modules/trends/trends.selectors';

export const requestMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);
    switch (action.type) {
      case SET_TRENDS_VIEW:
      case UNSET_TRENDS_FILTER:
      case SET_TRENDS_FILTER: {
        const filters = getTrendsFilters(getState());
        const view = getTrendsView(getState());

        return dispatch(
          view === TRENDS_VIEWS.all
            ? fetchAllTrends(filters)
            : fetchFavorites(filters)
        );
      }

      case LOAD_MORE_TRENDS: {
        const filters = getTrendsFilters(getState());

        return dispatch(fetchMoreTrends(filters));
      }

      default:
        break;
    }
  };
