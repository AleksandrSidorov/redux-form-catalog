import React, { Component } from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>Contacts App</h1>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);
