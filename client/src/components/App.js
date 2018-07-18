import React, { Component } from 'react';
import Header from 'components/Header/Header';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            {children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
