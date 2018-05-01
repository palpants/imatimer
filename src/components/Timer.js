import React from 'react';

class Timer extends React.Component {
  constructor() {
    super();

    this.tick = this.tick.bind(this);

    this.state = { elapsed: 0 };
  }

  componentDidMount(){
    // set the interval
    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount(){
    // clear the interval
    clearInterval(this.timer);
  }

  tick(){
    // called every 50 ms
    // updates the elapsed counter
    this.setState({elapsed: new Date() - this.props.start});
  }

  render() {
    // calculate elapsed to tenth of a second
    var elapsed = Math.round(this.state.elapsed / 100);

    // give a number with one digit after the decimal
    var seconds = (elapsed / 10).toFixed(1);

    return (
      <div>
        <h4>{this.props.timer.title}</h4>
        <p>
          <b>{seconds}</b>
        </p>
      </div>
    );
  }
};

export default Timer;
