import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { elapsed: 0, start: 0 };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    // set the interval
    this.timer = setInterval(this.tick, 100);
  }

  componentWillUnmount() {
    // clear the interval
    clearInterval(this.timer);
  }

  tick() {
    // called every 100 ms
    // updates the elapsed counter
    this.setState({ elapsed: new Date() - this.props.start });
  }

  render() {
    // calculate elapsed to tenth of a second
    let elapsed = Math.round(this.state.elapsed / 100);

    // give a number with one digit after the decimal
    let seconds = (elapsed / 10).toFixed(1);

    return (
      <div>
        <h4>{this.props.timer.title}</h4>
        <p>
          <b>{seconds}</b>
        </p>
      </div>
    );
  };
};

export default Timer;
