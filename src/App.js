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

    this.timerGroupAdd = this.timerGroupAdd.bind(this);
    this.timerGroupRemove = this.timerGroupRemove.bind(this);
    this.timerGroupUpdate = this.timerGroupUpdate.bind(this);
    this.timerAdd = this.timerAdd.bind(this);
    this.timerRemove = this.timerRemove.bind(this);
    this.timerUpdate = this.timerUpdate.bind(this);
    this.timerRecordStart = this.timerRecordStart.bind(this);
    this.timerRecordEnd = this.timerRecordEnd.bind(this);

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

  timerGroupAdd(timerGroup) {
    const timerGroups = {...this.state.timerGroups};
    // add the new timerGroup
    const timestamp = Date.now();
    timerGroups[`timerGroup-${timestamp}`] = timerGroup;
    // set state
    this.setState({ fishes: fishes });
  }

  timerGroupRemove(timerGroupKey) {
    let timerGroups = {...this.state.timerGroups};
    // firebase requires set to null instead of delete
    timerGroups[timerGroupKey] = null;

    this.setState({ timerGroups: timerGroups });
  }

  timerGroupUpdate(timerGroupKey, updatedTimerGroup) {
    let timerGroups = {...this.state.timerGroups};
    // update existing timerGroup
    timerGroups[timerGroupKey] = updatedTimer;

    this.setState({ timerGroups: timerGroups });
  }

  timerAdd(timerGroupKey, timer) {
    // copy state
    let timerGroups = {...this.state.timerGroups};
    // add the new timer
    const timestamp = Date.now();
    timerGroups[timerGroupKey].timers[`timer-${timestamp}`] = timer;
    // set state
    this.setState({ timerGroups: timerGroups });
  }

  timerRemove(timerGroupKey, timerKey) {
    let timerGroups = {...this.state.timerGroups};
    // firebase requires set to null instead of delete
    timerGroups[timerGroupKey].timers[timerKey] = null;

    this.setState({ timerGroups: timerGroups });
  }

  timerUpdate(timerGroupKey, timerKey, updatedTimer) {
    let timerGroups = {...this.state.timerGroups};
    // update existing timer
    timerGroups[timerGroupKey].timers[timerKey] = updatedTimer;

    this.setState({ timerGroups: timerGroups });
  }

  timerRecordStart(timerGroupKey, timerKey) {
    let timerGroups = {...this.state.timerGroups};
    // create new record
    const timestamp = Date.now();
    timerGroups[timerGroupKey].timers[timerKey].records[`record-${timestamp}`].start = timestamp;

    this.setState({ timerGroups: timerGroups });
  }

  timerRecordEnd(timerGroupKey, timerKey, recordKey) {
    let timerGroups = {...this.state.timerGroups};
    // end existing record
    timerGroups[timerGroupKey].timers[timerKey].records[recordKey].end = timestamp;

    this.setState({ timerGroups: timerGroups });
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
