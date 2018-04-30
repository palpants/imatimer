import React from 'react';

class TimerFace extends React.Component {
  render() {
    const timer = this.props.time;

    return (
      <div className="iat-timer__face">
        <h3>{timer.title}</h3>
        <p>{timer.time}</p>
      </div>
    )
  }
}

export default TimerFace;
