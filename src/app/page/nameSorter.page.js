import React from "react";
import DisplayCatsName from "../component/displayCatsName.componet";
import * as actions from "../actions/actions";
import { connect } from "react-redux";

class NameSorterPage extends React.Component {
  componentDidMount() {
    this.props.fetchPetOwners();
  }

  groupByGender = list => {
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
  };

  getOwnerWithOnlyCats = ownersWithPetsList => {
    return ownersWithPetsList
      .filter(x => x.pets)
      .map(y => {
        return {
          name: y.name,
          gender: y.gender,
          pets: y.pets.filter(b => b.type === "Cat")
        };
      });
  };

  render = () => {
    const { petowners } = this.props;
    if (!petowners) {
      return "Something went wrong! Please check console logs for details. ";
    }
    var ownersWithOnlyCats = this.getOwnerWithOnlyCats(petowners);
    var groupByGenderResult = this.groupByGender(ownersWithOnlyCats);
    return (
      <div className="App">
        <h1>Programming challenge</h1>
        <h4>
          List of all the cats in alphabetical order under a heading of the
          gender of their owner.
        </h4>
        <DisplayCatsName dataSource={groupByGenderResult} />
      </div>
    );
  };
}

export default connect(
  state => state,
  actions
)(NameSorterPage);
