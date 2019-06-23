import reducer from "./rootReducer";

describe("reducers", () => {
  describe("rootReducer", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).toEqual({ petOwners: [] });
    });
  });
});
