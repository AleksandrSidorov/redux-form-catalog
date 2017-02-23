import React, { Component } from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './App.css'

injectTapEventPlugin()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='app-container'>
          <h1>Contacts App</h1>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);
