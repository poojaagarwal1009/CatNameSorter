import React from "react";
import PropTypes from "prop-types";

class DisplayCatsNameComponent extends React.PureComponent {
  static propTypes = {
    dataSource: PropTypes.array.isRequired
  };

  //for logging inside the console along with the component name
  static _log(...message) {
    console.log("|DisplayCatsNameComponent|", ...message);
  }

  render() {
    const { dataSource } = this.props;
    if (!dataSource) {
      DisplayCatsNameComponent._log("empty data source.");
      return;
    }
    DisplayCatsNameComponent._log(dataSource);

    return dataSource.map((item, key) => (
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
    ));
  }
}

export default DisplayCatsNameComponent;
