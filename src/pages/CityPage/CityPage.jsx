import React, { Component } from 'react';

class CityPage extends Component {

  componentDidMount() {
    console.log(this.props.match.params.name)
  }

  render() {
    return (
      <h1>citypage</h1>
    )
  }
}

export default CityPage;