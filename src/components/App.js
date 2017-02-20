import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
      	<h1>App</h1>
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
