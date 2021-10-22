export const trendsOptionsFactory = (options) => (dispatch) =>
  options.map(({ text, param, action }) => ({
    text,
    onClick: () => dispatch(action(param))
  }));
