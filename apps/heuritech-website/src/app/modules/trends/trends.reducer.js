import {
  SET_TRENDS_ITEMS,
  SET_TRENDS_VIEW,
  SET_TRENDS_FILTER,
  UNSET_TRENDS_FILTER,
  SET_MOODBOARD,
  UNSET_MOODBOARD
} from './trends.actions';
import _uniqBy from 'lodash/uniqBy';
import _omit from 'lodash/omit';

import { TRENDS_VIEWS } from './trends.constants';

export const initialState = {
  filters: {},
  view: TRENDS_VIEWS.all,
  items: [],
  total: 0,
  moodboard: {
    visible: false,
    name: '',
    images: []
  }
};

export const trendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRENDS_ITEMS: {
      return {
        ...state,
        items: _uniqBy(action.payload.trends, 'id'),
        total: action.payload.total
      };
    }

    case SET_TRENDS_VIEW: {
      return {
        ...state,
        view: action.payload
      };
    }

    case SET_MOODBOARD: {
      return {
        ...state,
        moodboard: {
          name: action.payload.name,
          images: action.payload.images,
          visible: true
        }
      };
    }

    case UNSET_MOODBOARD: {
      return {
        ...state,
        moodboard: initialState.moodboard
      };
    }

    case SET_TRENDS_FILTER: {
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
    }

    case UNSET_TRENDS_FILTER: {
      return {
        ...state,
        filters: _omit(state.filters, action.payload)
      };
    }

    default:
      return state;
  }
};