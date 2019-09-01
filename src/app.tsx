import "./vendor";
import "./styles/main.scss";
import { createStore } from "@store/store";
import { createBrowserHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Pages } from "./pages/pages.component";

const history = createBrowserHistory();
const store = createStore(history);

const App = () => (
  <Provider store={store}>
    <Pages history={history} />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));

export { App };


