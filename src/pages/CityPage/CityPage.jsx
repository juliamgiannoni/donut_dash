import React, { Component } from 'react';

class CityPage extends Component {

  componentDidMount() {
    console.log(this.props.match.params.name)
  }

  render() {
    return (
      <h1>{this.props.match.params.name}</h1>
    )
  }
}

export default CityPage;