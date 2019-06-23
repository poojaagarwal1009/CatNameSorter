import DisplayCatsNameContainer from "../component/displayCatsName.container";
import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const ownerListWithAllPets = {
  dataSource: [
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
  ]
};

const ownersWithOnlyCats = {
  dataSource: [
    {
      name: "Jennifer",
      gender: "Female",
      pets: [
        {
          name: "Garfield",
          type: "Cat"
        }
      ]
    }
  ]
};

describe("components", () => {
  describe("DisplayCatsNameContainer", () => {
    it("should not render div when props are not passed", () => {
      const wrapper = shallow(<DisplayCatsNameContainer />);
      expect(wrapper.find("div").length).toEqual(0);
    });

    it("should not call funtions when props are not passed", () => {
      jest.spyOn(DisplayCatsNameContainer.prototype, "getOwnerWithOnlyCats");
      jest.spyOn(DisplayCatsNameContainer.prototype, "groupByGender");
      const wrapper = shallow(<DisplayCatsNameContainer />);

      expect(wrapper.instance().getOwnerWithOnlyCats).not.toHaveBeenCalled();
      expect(wrapper.instance().groupByGender).not.toHaveBeenCalled();
    });

    it("should call getOwnerWithOnlyCats with correct parameters is called", () => {
      const wrapper = shallow(
        <DisplayCatsNameContainer
          dataSource={ownerListWithAllPets.dataSource}
        />
      );

      expect(wrapper.instance().getOwnerWithOnlyCats).toHaveBeenCalledWith(
        ownerListWithAllPets.dataSource
      );
    });

    it("should call groupByGender with correct parameters is called", () => {
      const wrapper = shallow(
        <DisplayCatsNameContainer
          dataSource={ownerListWithAllPets.dataSource}
        />
      );
      expect(wrapper.instance().groupByGender).toHaveBeenCalledWith(
        ownersWithOnlyCats.dataSource
      );
    });
  });
});
