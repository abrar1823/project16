export const colorReducer = (
  state = {
    mycol: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_COL":
      return {
        ...state,
        mycol: [action.payload, ...state.mycol],
      };

    default:
      return state;
  }
  return state;
};
