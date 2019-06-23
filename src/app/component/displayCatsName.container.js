import React from "react";
import PropTypes from "prop-types";

import DisplayCatsNameComponet from "../component/displayCatsName.componet";

class DisplayCatsNameContainer extends React.PureComponent {
  static propTypes = {
    dataSource: PropTypes.array.isRequired
  };

  static _log(...message) {
    console.log("|DisplayCatsNameContainer|", ...message);
  }

  groupByGender(list) {
    const catNameListForMale = [];
    const catNameListForFemale = [];
    list.forEach(x => {
      if (x.gender === "Male") {
        x.pets.forEach(y => catNameListForMale.push(y.name));
      } else {
        x.pets.forEach(y => catNameListForFemale.push(y.name));
      }
    });
    return [
      { gender: "Male", pets: catNameListForMale },
      { gender: "Female", pets: catNameListForFemale }
    ];
  }

  getOwnerWithOnlyCats(ownersWithPetsList) {
    return ownersWithPetsList
      .filter(x => x.pets)
      .map(y => {
        return {
          name: y.name,
          gender: y.gender,
          pets: y.pets.filter(b => b.type === "Cat")
        };
      });
  }

  render() {
    const { dataSource } = this.props;
    if (!dataSource || dataSource.length < 1) {
      DisplayCatsNameContainer._log("empty data source.");
      return;
    }
    DisplayCatsNameContainer._log(dataSource);
    var ownersWithOnlyCats = this.getOwnerWithOnlyCats(dataSource);
    var groupByGenderResult = this.groupByGender(ownersWithOnlyCats);
    return <DisplayCatsNameComponet dataSource={groupByGenderResult} />;
  }
}

export default DisplayCatsNameContainer;
