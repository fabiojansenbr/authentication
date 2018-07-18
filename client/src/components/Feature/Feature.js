import React, { Component } from 'react';
import requireAuth from 'components/HOC/requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>
        <h2>Feature component</h2>
      </div>
    );
  }
}

export default requireAuth(Feature);