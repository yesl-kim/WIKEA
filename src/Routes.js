import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/Login/SignIn/SignIn';
import SignUp from './pages/Login/SignUp/SignUp';
import Main from './pages/Main/Main';
import Lists from './pages/Main/Lists/Lists';
import Details from './pages/Main/Details/Details';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/:sub_category_name" component={Lists} />
          <Route exact path="/product/:name" component={Details} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
