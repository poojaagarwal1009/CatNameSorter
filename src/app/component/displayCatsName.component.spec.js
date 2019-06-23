import DisplayCatsNameComponet from "../component/displayCatsName.componet";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  dataSource: [
    {
      gender: "Male",
      pets: ["Molly", "Angel", "Tigger"]
    },
    {
      gender: "Femal",
      pets: ["Jasper", "Gizmo"]
    }
  ]
};

describe("components", () => {
  describe("DisplayCatsNameComponent", () => {
    it("should not render div when props are not passed", () => {
      const wrapper = shallow(<DisplayCatsNameComponet />);
      expect(wrapper.find("div").length).toEqual(0);
    });

    it("should render correctly", () => {
      const wrapper = shallow(
        <DisplayCatsNameComponet dataSource={props.dataSource} />
      );
      expect(wrapper.find("div").length).toEqual(2);
    });

    it("should render pet list in the correct sort", () => {
      const wrapper = shallow(
        <DisplayCatsNameComponet dataSource={props.dataSource} />
      );
      const firstListChildren = wrapper.first("ul").childAt(1);
      expect(firstListChildren.map(child => child.childAt(0).text())).toEqual([
        "Angel"
      ]);
      expect(firstListChildren.map(child => child.childAt(1).text())).toEqual([
        "Molly"
      ]);
      expect(firstListChildren.map(child => child.childAt(2).text())).toEqual([
        "Tigger"
      ]);
    });
  });
});
