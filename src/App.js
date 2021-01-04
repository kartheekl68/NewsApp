import React from 'react';
import './App.scss';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import HomeComponent from './components/home-component/home.component';
import CategoriesComponent from './components/categories-component/categories.component';
import HeaderComponent from './components/header-component/header.component';
import FooterComponent from './components/footer-component/footer.component';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route exact path='/home' component={HomeComponent} />
          <Route exact path='/categories' component={CategoriesComponent} />
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
