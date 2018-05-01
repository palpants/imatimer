import React from 'react';

import Timer from './Timer';
import AddTimer from './AddTimer';

class TimerGroup extends React.Component {
  render() {
    const group = this.props.group;
    const startTime = Date.now();

    return (
      <div className="iat-group">
        <h3>{group.title}</h3>
        <p>{group.time}</p>
        {
          Object
            .keys(group.timers)
            .map((key) => <Timer
              key={key}
              index={key}
              timer={group.timers[key]}
              timerRemove={group.timerRemove}
              timerUpdate={group.timerUpdate}
              timerRecordStart={group.timerRecordStart}
              timerRecordEnd={group.timerRecordEnd}
              start={startTime}
            />)
        }
      </div>
    )
  }
}

export default TimerGroup;
