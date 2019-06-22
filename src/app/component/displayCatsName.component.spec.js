// Libraries
import DisplayCatsName from "./displayCatsName.componet";
import React from "react";
import shallow from "enzyme";

const props = {
  dataSource: [{}, {}]
};

describe("components", () => {
  describe("DisplayCatsName", () => {
    it("should render correctly", () => {
      const comp = shallow(<DisplayCatsName dataSource={props.dataSource} />);
      expect(comp.find("div").length).toEqual(1);
    });
  });
});
