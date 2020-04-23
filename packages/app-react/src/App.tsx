import React, { Component } from 'react';
import { ChoButton } from 'cho-components-react';
import './App.css';

interface State {}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ChoButton />
        </header>
      </div>
    );
  }
}

export default App;
