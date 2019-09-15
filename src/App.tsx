import React, { Component } from 'react';
import { Route } from 'react-router';
import { Main, Another } from './pages';

// import Gnb from './components/Gnb'
// import TestComponentOne from './components/TestComponentOne'
// import TestComponentTwo from './components/TestComponentTwo'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main}/>
        <Route path="/another" component={Another}/>
      </div>
    );
  }
}

export default App;
