import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catData: []
    };
  }

  componentDidMount = () => {
    fetch("https://agl-developer-test.azurewebsites.net/people.json")
      .then(results => {
        return results.json();
      })
      .then(response => {
        this.setState({ catData: response });
      })
      .catch(function(error) {
        console.log("Error : " + error);
      });
  };

  groupBy = (list, keyGetter) => {
    const map = new Map();
    list.forEach(item => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
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
    var result = this.state.catData
      .filter(x => x.pets)
      .map(y => {
        return {
          name: y.name,
          gender: y.gender,
          pets: y.pets.filter(b => b.type === "Cat")
        };
      });
    var groupByGenderResult = this.groupByGender(result);
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
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
