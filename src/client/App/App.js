/**
 * App Component.
 * @author Ganesh Khutwad.
 */
import React, { Component } from 'react';
import { Header } from 'Components';
import Main from './Main/Main';

class App extends Component {

  constructor() {
    super();
    this.appTitle = 'Employee Feedback App';
  }
  render() {
    return (
      <div>
        <Header heading={this.appTitle} />
        <Main />
      </div>
    );
  }
}

export default App;
