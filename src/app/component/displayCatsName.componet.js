import React from "react";
import PropTypes from "prop-types";

class DisplayCatsName extends React.PureComponent {
  static propTypes = {
    dataSource: PropTypes.array.isRequired
  };

  static _log(...message) {
    console.log("|DisplayCatsName|", ...message);
  }

  render() {
    const { dataSource } = this.props;
    if (!dataSource) {
      return;
    }
    DisplayCatsName._log(dataSource);

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

export default DisplayCatsName;
