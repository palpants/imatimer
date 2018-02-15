import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import Modal from './components/Modal';
import ContentBox from './components/ContentBox';
import TimerGroup from './components/TimerGroup';
import Timer from './components/Timer';
import AddTimerGroup from './components/AddTimerGroup';
import AddTimer from './components/AddTimer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerGroups = {};
      timers = {};
      
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title title="I'm a Timer App" />
          <Modal title="beta" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
