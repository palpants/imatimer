import React from 'react';

import Timer from './Timer';
import AddTimer from './AddTimer';

class TimerGroup extends React.Component {
  render() {
    const group = this.props.group;

    return (
      <div className="iat-group">
        <h3>{group.title}</h3>
        <p>{group.time}</p>
        {
          Object
            .keys(group.timers)
            .map((key) => <Timer key={key} index={key} timer={group.timers[key]} />)
        }
      </div>
    )
  }
}

export default TimerGroup;
