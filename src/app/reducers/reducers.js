const rootReducer = (state = { petOwners: [] }, action) => {
  switch (action.type) {
    case "FETCH_PETOWNERS":
      return action.payload;
    default:
      return state;
  }
};

export default rootReducer;
