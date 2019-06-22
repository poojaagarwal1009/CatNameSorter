import API from "../api/base.api";

export function fetchPetOwners() {
  return (dispatch, getState) => {
    API.get().then(({ data }) => {
      console.log("In FETCH_PETOWNERS");
      console.log(data);
      dispatch({ type: "FETCH_PETOWNERS", payload: data });
    });
  };
}
