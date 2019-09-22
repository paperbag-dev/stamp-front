import React from 'react';
import TestComponentOne from '../components/TestComponentOne';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>main page</h1>
        <TestComponentOne />
      </div>
    )
  }
}
