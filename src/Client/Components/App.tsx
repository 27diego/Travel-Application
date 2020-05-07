import React, { ReactElement } from "react";
import { hot } from "react-hot-loader/root";

// import { Provider } from "react-redux";
// import { store } from "../Redux/Store/configureStore";

class App extends React.Component {
  render(): ReactElement {
    return (
      // <Provider store={store}>
      <div className="App">Hello React and Express!</div>
      // </Provider>
    );
  }
}

export default hot(App);

// import { Route, Router, Switch } from "react-router-dom";

//React-Router
/* <Router history={history}>
          <Switch>
            <Components />
          </Switch>
        </Router>
*/
