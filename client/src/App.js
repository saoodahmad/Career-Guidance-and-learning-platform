import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import appRoutes from './Routes/index';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {appRoutes.map((route) => {
            if (route.exact) {
              return (
                <Route
                  path={route.path}
                  exact
                  component={route.component}
                  key={route.path}
                />
              );
            } else {
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  key={route.path}
                />
              );
            }
          })}
        </Switch>
      </Router>
    </>
  );
};

export default App;
