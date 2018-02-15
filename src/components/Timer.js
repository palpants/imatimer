import React from 'react';

class Timer extends React.Component {
  render() {
    const timer = this.props.timer;

    return (
      <div className="iat-timer">
        <h3>{timer.title}</h3>
        <p>{timer.time}</p>
      </div>
    )
  }
}

export default Timer;