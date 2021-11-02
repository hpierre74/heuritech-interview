export const getTrendsItems = (state) => state.trends.items;
export const getTrendsTotal = (state) => state.trends.total;
export const getTrendsView = (state) => state.trends.view;
export const getTrendsFilters = (state) => state.trends.filters;
export const getMoodboard = (state) => state.trends.moodboard;
export const canLoadMore = (state) =>
  getTrendsTotal(state) > getTrendsItems(state).length;
