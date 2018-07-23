import React from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer';
import AddTimer from './AddTimer';

class TimerGroup extends React.Component {
  render() {
    const group = this.props.group;
    const timers = this.props.timers;
    const start = Date.now();

    return (
      <div className="iat-group">
        <h3>{group.title}</h3>
        <p>00:00</p>
        {Object
            .keys(timers)
            .map((key) => <Timer
              key={key}
              index={key}
              timer={timers[key]}
              timerRemove={group.timerRemove}
              timerUpdate={group.timerUpdate}
              timerSetActive={this.timerSetActive}
              timerStopActive={this.timerStopActive}
              //timerRecordStart={group.timerRecordStart}
              //timerRecordEnd={group.timerRecordEnd}
              start={start}
            />)
        }
        <AddTimer addTimer={this.addTimer} />
      </div>
    )
  }
}

export default TimerGroup;
