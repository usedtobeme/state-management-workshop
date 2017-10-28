import React, { Component } from 'react';
import TopBar from './components/TopBar';
import NewRegistry from './components/NewRegistry';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <main>
          <NewRegistry />
        </main>
      </div>
    );
  }
}

export default App;
