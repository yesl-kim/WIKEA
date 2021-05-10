import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/Login/SignIn/SignIn';
import SignUp from './pages/Login/SignUp/SignUp';
import Main from './pages/Main/Main';
import Lists from './pages/Main/Lists/Lists';
import Details from './pages/Main/Details/Details';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/lists" component={Lists} />
          <Route exact path="/details" component={Details} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
