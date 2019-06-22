import React from "react";
import Enzyme, { mount } from "enzyme";

const setup = state => {
  const props = {
    ...state,
    actions: {
      acceptLegalDisclosure: jest.fn()
    }
  };
};

describe("component", () => {
  describe("displayCatsComponent", () => {
    it("should display legal disclosure pop up when displayLegalDisclosure is true", () => {
      const { wrapper } = setup({ displayLegalDisclosure: true });
      expect(wrapper).toBeDefined();

      expect(wrapper.find(".modal .is-active").length).toBe(1);
    });
  });
});
