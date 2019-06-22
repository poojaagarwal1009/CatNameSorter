import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./styles.css";

class App extends React.Component {
  static propTypes = {
    ownersWithPetsList: PropTypes.array.isRequired
  };

  state = {
    ownersWithPetsList: []
  };

  componentDidMount = () => {
    this.getOwnersWithPetsList();
  };

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
        {groupByGenderResult.map((item, key) => {
          return (
            <div key={key}>
              <p>
                <strong>{item.gender}</strong>
              </p>
              <ul>
                {item.pets.sort().map((petName, index) => (
                  <li key={index}>{petName}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
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

  getOwnersWithPetsList() {
    fetch("https://agl-developer-test.azurewebsites.net/people.json")
      .then(results => {
        return results.json();
      })
      .then(response => {
        this.setState({ ownersWithPetsList: response });
      })
      .catch(function(error) {
        console.log("Error : " + error);
      });
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
