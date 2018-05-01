import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import Modal from './components/Modal';
import ContentBox from './components/ContentBox';
import TimerGroup from './components/TimerGroup';
import AddTimerGroup from './components/AddTimerGroup';

import sampleTimers from './sample/sample-timers';

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
    this.timerSetActive = this.timerSetActive.bind(this);
    this.timerStopActive = this.timerStopActive.bind(this);

    this.state = sampleTimers;
  }

  timerGroupAdd(timerGroup) {
    const timerGroups = {...this.state.timerGroups};
    // add the new timerGroup
    const timestamp = Date.now();
    timerGroups[`timerGroup-${timestamp}`] = timerGroup;

    this.setState({ timerGroups: timerGroups });
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
    timerGroups[timerGroupKey] = updatedTimerGroup;

    this.setState({ timerGroups: timerGroups });
  }

  timerAdd(timerGroupKey, timer) {
    let timerGroups = {...this.state.timerGroups};
    // add the new timer
    const timestamp = Date.now();
    timerGroups[timerGroupKey].timers[`timer-${timestamp}`] = timer;

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

    return `record-${timestamp}`;
  }

  timerRecordEnd(timerGroupKey, timerKey, recordKey) {
    let timerGroups = {...this.state.timerGroups};
    // end existing record
    const timestamp = Date.now();
    timerGroups[timerGroupKey].timers[timerKey].records[recordKey].end = timestamp;

    this.setState({ timerGroups: timerGroups });
  }

  timerSetActive(timerGroupKey, timerKey) {
    let activeTimer = {...this.state.active};
    // end active timer record
    if (activeTimer.timerGroup && activeTimer.timer && activeTimer.record) {
      this.timerRecordEnd(activeTimer.timerGroup, activeTimer.timer, activeTimer.record)
    }
    // start new timer record
    const recordKey = this.timerRecordStart(timerGroupKey, timerKey);
    // update active timer
    activeTimer = {
      timerGroup: timerGroupKey,
      timer: timerKey,
      record: recordKey,
    };

    this.setState({ active: activeTimer });
  }

  timerStopActive(timerGroupKey, timerKey) {
    let activeTimer = {...this.state.active};
    // end active timer record
    this.timerRecordEnd(activeTimer.timerGroup, activeTimer.timer, activeTimer.record)
    // clear active timer
    activeTimer = {
      timerGroup: 0,
      timer: 0,
      record: 0,
    };

    this.setState({ active: activeTimer });
  }

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
          <ContentBox>
            {
              Object
                .keys(this.state.timerGroups)
                .map((key) => <TimerGroup 
                  key={key}
                  index={key}
                  group={this.state.timerGroups[key]}
                  timerGroupRemove={this.timerGroupRemove}
                  timerGroupUpdate={this.timerGroupUpdate}
                  timerAdd={this.timerAdd}
                  timerRemove={this.timerRemove}
                  timerUpdate={this.timerUpdate}
                  timerSetActive={this.timerSetActive}
                  timerStopActive={this.timerStopActive}
                />)
            }
          </ContentBox>
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
