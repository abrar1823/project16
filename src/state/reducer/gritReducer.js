export const gritReducer = (
  state = { grit: "Good Morning", fruit: "Apple" },
  action
) => {
  switch (action.type) {
    case "GRITING":
      return {
        ...state,
        grit: action.payload,
      };

    case "ADDFRUIT":
      return {
        ...state,
        fruit: action.payload,
      };
  }
  return state;
};
