import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'react-bootstrap';
import  DataContainer  from './DataContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cloud EDM</h1>
        </header>
        
        <DataContainer />
        <Button bsStyle="info">save</Button>
      </div>
    );
  }
}

export default App;
