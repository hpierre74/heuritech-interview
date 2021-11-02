import {
  deleteFavorite,
  getFavorites,
  getMoodboard,
  getTrends,
  putFavorite
} from '@heuritech-interview/api';
import {
  addTrendsItems,
  setFavorite,
  setMoodboard,
  setTrendsItems,
  unsetFavorite
} from './trends.actions';

export const fetchAllTrends = (query) => async (dispatch) => {
  try {
    const payload = await getTrends(query);
    if (!payload) return null;

    return dispatch(setTrendsItems(payload));
  } catch (error) {
    return dispatch({ type: 'error/SET_ERROR', payload: error.message });
  }
};

export const fetchMoreTrends = (query) => async (dispatch) => {
  try {
    const payload = await getTrends(query);
    if (!payload) return null;

    return dispatch(addTrendsItems(payload));
  } catch (error) {
    return dispatch({ type: 'error/SET_ERROR', payload: error.message });
  }
};

export const fetchFavorites = (query) => async (dispatch) => {
  try {
    const payload = await getFavorites(query);
    if (!payload) return null;

    return dispatch(setTrendsItems(payload));
  } catch (error) {
    return dispatch({ type: 'error/SET_ERROR', payload: error.message });
  }
};

export const addToFavorites = (id) => async (dispatch) => {
  try {
    await putFavorite(id);

    return dispatch(setFavorite(id));
  } catch (error) {
    return dispatch({ type: 'error/SET_ERROR', payload: error.message });
  }
};

export const deleteFromFavorites = (id) => async (dispatch) => {
  try {
    await deleteFavorite(id);

    return dispatch(unsetFavorite(id));
  } catch (error) {
    return dispatch({ type: 'error/SET_ERROR', payload: error.message });
  }
};

export const fetchTrendMoodboard =
  ({ id, name }) =>
  async (dispatch) => {
    try {
      const payload = await getMoodboard(id);
      if (!payload) return null;

      return dispatch(setMoodboard(name, payload));
    } catch (error) {
      return dispatch({ type: 'error/SET_ERROR', payload: error.message });
    }
  };
