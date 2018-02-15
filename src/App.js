import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import Modal from './components/Modal';
import ContentBox from './components/ContentBox';
import TimerGroup from './components/TimerGroup';
import AddTimerGroup from './components/AddTimerGroup';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      timerGroups: {
        1: {
          title: 'Timer Group 1',
          time: 123,
          timers: {
            1: {
              title: 'I like to party',
              time: 63,
              records: {
                1: {
                  start: 0,
                  end: 33,
                },
                2: {
                  start: 0,
                  end: 30,
                },
              },
            },
            2: {
              title: 'A second timer',
              time: 60,
              records: {
                1: {
                  start: 0,
                  end: 20,
                },
                2: {
                  start: 0,
                  end: 40,
                },
              },
            },
          },
        },
        2: {
          title: 'Timer Group 2',
          time: 67,
          timers: {
            1: {
              title: 'This is a pretty long timer title',
              time: 67,
              records: {
                1: {
                  start: 0,
                  end: 34,
                },
                2: {
                  start: 0,
                  end: 33,
                },
              },
            },
          },
        },
      },
    };

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title title="I'm a Timer App" />
          <Modal title="beta">
            <h2>This app is in beta!</h2>
            <p>Don't rely on it in any way.</p>
          </Modal>
        </header>
        <ContentBox>
          {
            Object
              .keys(this.state.timerGroups)
              .map((key) => <TimerGroup key={key} index={key} group={this.state.timerGroups[key]} />)
          }
        </ContentBox>
        <footer>
          <p>I like to footer</p>
          <Modal title="Privacy">
            <p>All timer data is stored only on your local computer, so there is nothing to keep private.</p>
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
