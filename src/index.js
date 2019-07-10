import React from "react";
import ReactDOM from "react-dom";

import "style/style.scss";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "reducers";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import setAuthToken from "utils/setAuthToken";
import { setCurrentUser } from "actions/authActions";

import { Main } from 'views';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(localStorage.jwtToken));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        {/* <Route path="/login" component={LoginPage} /> */}
        {/* <Route path="/profile" component={requireAuth(ProfilePage)} /> */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
