import React from "react";
import ReactDOM from "react-dom";
import DisplayCatsName from "../src/app/component/displayCatsName.componet";
import Api from "../src/app/api/nameList.api";
import "./styles.css";

class App extends React.Component {
  state = {
    ownersWithPetsList: []
  };

  componentDidMount = () => {
    this.getOwnersWithPetsList();
  };

  getOwnersWithPetsList() {
    // fetch("https://agl-developer-test.azurewebsites.net/people.json")
    //   .then(results => {
    //     return results.json();
    //   })
    //   .then(response => {
    //     this.setState({ ownersWithPetsList: response });
    //   })
    //   .catch(function(error) {
    //     console.log("Error : " + error);
    //   });
    Api.
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
    var ownerWithOnlyCats = this.getOwnerWithOnlyCats(
      this.state.ownersWithPetsList
    );
    var groupByGenderResult = this.groupByGender(ownerWithOnlyCats);
    console.log(groupByGenderResult);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <DisplayCatsName dataSource={groupByGenderResult} />
      </div>
    );
  };
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
