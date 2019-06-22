import React from "react";
import { connect } from "react-redux";

import DisplayCatsNameContainer from "../component/displayCatsName.container";
import * as actions from "../actions/fetchPetOwnerAction";

class NameSorterPage extends React.Component {
  componentWillMount() {
    this.props.fetchPetOwners();
  }

  render = () => {
    const { petOwners } = this.props;
    if (petOwners.length < 1) {
      return "Something went wrong! Please check console logs for details. ";
    }
    return (
      <div className="App">
        <h1>Programming challenge</h1>
        <h4>
          List of all the cats in alphabetical order under a heading of the
          gender of their owner.
        </h4>
        <DisplayCatsNameContainer dataSource={petOwners} />
      </div>
    );
  };
}

export default connect(
  state => state,
  actions
)(NameSorterPage);
