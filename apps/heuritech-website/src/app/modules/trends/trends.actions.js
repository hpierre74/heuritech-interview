export const SET_TRENDS_ITEMS = 'trends/SET_TRENDS_ITEMS';
export const setTrendsItems = (payload) => ({
  type: SET_TRENDS_ITEMS,
  payload: payload
});

export const SET_TRENDS_VIEW = 'trends/SET_TRENDS_VIEW';
export const setTrendViews = (view) => ({
  type: SET_TRENDS_VIEW,
  payload: view
});

export const SET_MOODBOARD = 'trends/SET_MOODBOARD';
export const setMoodboard = (name, payload) => ({
  type: SET_MOODBOARD,
  payload: { images: payload.images, name }
});

export const UNSET_MOODBOARD = 'trends/UNSET_MOODBOARD';
export const unsetMoodboard = () => ({
  type: UNSET_MOODBOARD
});

export const SET_FAVORITE = 'trends/SET_FAVORITE';
export const setFavorite = (id) => ({ type: SET_FAVORITE, payload: id });

export const UNSET_FAVORITE = 'trends/UNSET_FAVORITE';
export const unsetFavorite = (id) => ({ type: UNSET_FAVORITE, payload: id });

export const SET_TRENDS_FILTER = 'trends/SET_TRENDS_FILTER';
export const setTrendsFilter = (filter) => ({
  type: SET_TRENDS_FILTER,
  payload: filter
});

export const UNSET_TRENDS_FILTER = 'trends/UNSET_TRENDS_FILTER';
export const unsetTrendsFilter = (filterKey) => ({
  type: UNSET_TRENDS_FILTER,
  payload: filterKey
});
