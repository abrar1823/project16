export const categoryReducer = (state = { selectedcat: "kids" }, action) => {
  switch (action.type) {
    case "SELECTED_CAT":
      return {
        ...state,
        selectedcat: action.payload,
      };
      break;
    default:
      return state;
  }
  return state;
};
