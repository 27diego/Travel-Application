import "react-hot-loader/patch";
import React from "react";
import ReactDOM from "react-dom";

import { AppContainer } from "react-hot-loader";
import App from "./Components/App";

const render = (Component): void => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector("#root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./Components/App.tsx", () => {
    const NextRootContainer = require("./Components/App.tsx").default;
    render(NextRootContainer);
  });
}
