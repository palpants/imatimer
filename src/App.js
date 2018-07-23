import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import Modal from './components/Modal';
import TimerGridContainer from './components/TimerGridContainer';
import TimerGroup from './components/TimerGroup';
import AddTimerGroup from './components/AddTimerGroup';

class App extends React.Component {

  render() {
    return (
      <div className="iat-app">
        <header className="iat-header">
          <Title title="I'm a Timer App" />
          <Modal title="beta">
            <h2>This app is in beta!</h2>
            <p>Don't rely on it in any way.</p>
          </Modal>
        </header>
        <div className="iat-page">
          <TimerGridContainer />
        </div>
        <footer className="iat-footer">
          <p>I like to footer</p>
          <Modal title="Privacy">
            <p>All timer data is stored locally in your web browser, so there is nothing to keep private.</p>
          </Modal>
          <Modal title="Export To File">
            <p>asdf</p>
          </Modal>
          <Modal title="Import From File">
            <p>asdf</p>
          </Modal>
          <Modal title="Reset">
            <p>asdf</p>
          </Modal>
        </footer>
      </div>
    );
  }
}

export default App;
