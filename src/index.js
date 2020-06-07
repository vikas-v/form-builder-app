import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import history from './history'
import { store } from './sagas/store';
import { HomeContainer } from './containers/Home';
import SurvayFormContainer from './containers/SurvayForm';
// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Route exact={true} path="/">
        <HomeContainer />
      </Route>
      <Route exact={true} path="/form/:formId">
        <SurvayFormContainer />
      </Route>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
