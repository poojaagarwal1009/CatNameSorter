import React from "react";
import ReactDOM from "react-dom";
import NameSorterPage from "../src/app/page/nameSorter.page";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../src/app/reducers/reducers";

import "./styles.css";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const petOwnersStore = createStoreWithMiddleware(reducers);

class App extends React.Component {
  render() {
    return (
      <Provider store={petOwnersStore}>
        <NameSorterPage />
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
