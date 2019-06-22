import API from "../api/base.api";

export function fetchPetOwners() {
  return (dispatch, getState) => {
    API.get().then(({ data }) => {
      dispatch({ type: "FETCH_PETOWNERS", payload: { petOwners: data } });
    });
  };
}
