import NameSorterPage from "../page/nameSorter.page";
import React from "react";
import Enzyme, { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const petOwnerList = [
  {
    name: "Jennifer",
    gender: "Female",
    age: 18,
    pets: [
      {
        name: "Garfield",
        type: "Cat"
      }
    ]
  },
  {
    name: "Steve",
    gender: "Male",
    age: 45,
    pets: null
  }
];
let store;
beforeEach(() => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  store = mockStore({});
});

describe("pages", () => {
  describe("NameSorterPage", () => {
    it("should render error message for no state value", () => {
      const wrapper = mount(
        <Provider store={store}>
          <NameSorterPage />
        </Provider>
      );
      expect(wrapper).toBeDefined();
      expect(wrapper.find("h4").length).toBe(1);
      expect(wrapper.find("h4").text()).toEqual(
        "Something went wrong! Please check console logs for details"
      );
      expect(wrapper.find(".div").length).toEqual(0);
    });

    it("should render div when props are passed", () => {
      const props = {
        petOwners: petOwnerList
      };
      const wrapper = mount(
        <Provider store={store}>
          <NameSorterPage {...props} />
        </Provider>
      );
      expect(wrapper.find(".App").length).toEqual(1);
    });
  });
});
