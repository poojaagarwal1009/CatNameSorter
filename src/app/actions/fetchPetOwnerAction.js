import API from "../api/base.api";

export function fetchPetOwners() {
  return dispatch => {
    API.get()
      .then(({ data }) => {
        console.log("|fetchPetOwners| Data |", data);
        dispatch({ type: "FETCH_PETOWNERS", payload: { petOwners: data } });
      })
      .catch(error => {
        console.error("|fetchPetOwners| Error |", error.response);
      });
  };
}
