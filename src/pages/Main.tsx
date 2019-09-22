import React from 'react';

import TestComponentOne from 'components/TestComponentOne';

import './style/Main.scss';


export default class Main extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
        <h1>main page</h1>
        <TestComponentOne />
      </div>
    )
  }
}
