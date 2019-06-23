import NameSorterPage from "../page/nameSorter.page";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const initialState = [
  {
    gender: "Male",
    pets: ["Molly", "Angel", "Tigger"]
  },
  {
    gender: "Femal",
    pets: ["Jasper", "Gizmo"]
  }
];

const setup = (state = initialState) => {
  const props = {
    match: {
      params: { claimId: 11030 }
    }
  };

  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(state);
  const wrapper = shallow(
    <Provider store={store}>
      <NameSorterPage />
    </Provider>
  );

  return {
    props,
    wrapper
  };
};

describe("pages", () => {
  describe("NameSorterPage", () => {
    it("should render no details", () => {
      const { wrapper } = setup(undefined);
      expect(wrapper).toBeDefined();
      expect(wrapper.find("div").length).toBe(0);
    });

    // it("should render error message when props are passed", () => {
    //   const wrapper = shallow(<NameSorterPage />);
    //   expect(wrapper.find("div").length).toEqual(0);
    // });

    // it("should render div when props are passed", () => {
    //   const wrapper = shallow(<NameSorterPage />);
    //   expect(wrapper.find("div").length).toEqual(0);
    // });
  });
});
