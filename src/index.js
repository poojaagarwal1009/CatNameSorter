import React from "react";
import ReactDOM from "react-dom";
import NameSorterPage from "../src/app/page/nameSorter.page";

import "./styles.css";

class App extends React.Component {
  render() {
    return <NameSorterPage />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
