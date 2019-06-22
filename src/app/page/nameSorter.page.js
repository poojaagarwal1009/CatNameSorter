import React from "react";
import DisplayCatsName from "../component/displayCatsName.componet";
import API from "../api/base.api";

class NameSorterPage extends React.Component {
  state = {
    ownersWithAllPetsList: [],
    isError: false
  };

  async componentDidMount() {
    try {
      let userData = await API.get();
      userData = userData.data;
      this.setState({ ownersWithAllPetsList: userData, isError: false });
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
      this.setState({ ownersWithAllPetsList: null, isError: true });
    }
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
    const { ownersWithAllPetsList, isError } = this.state;
    if (isError) {
      return "Something went wrong! Please check console logs for details. ";
    }
    var ownersWithOnlyCats = this.getOwnerWithOnlyCats(ownersWithAllPetsList);
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

export default NameSorterPage;
