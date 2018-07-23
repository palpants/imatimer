import React from 'react';
import PropTypes from 'prop-types';
import TimerGroup from './TimerGroup';
import AddTimerGroup from './AddTimerGroup';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class TimerGrid extends React.Component {
  /*
  static propTypes = {
    users: PropTypes.objectOf(
      PropTypes.shape({
        first: PropTypes.string,
        last: PropTypes.string,
        email: PropTypes.string,
      }).isRequired
    ).isRequired
  };
  */

  render() {
    return (
      <div className="timer-grid">
        <TransitionGroup component="div">
          {Object
            .keys(this.props.timerGroups)
            .map((key) => (
              <CSSTransition classNames="item" key={key} timeout={{ enter: 500, exit: 500 }}>
                <TimerGroup 
                  key={key}
                  index={key}
                  group={this.props.timerGroups[key]}
                  timers={this.props.timers}
                  timerGroupRemove={this.timerGroupRemove}
                  timerGroupUpdate={this.timerGroupUpdate}
                  timerAdd={this.timerAdd}
                  timerRemove={this.timerRemove}
                  timerUpdate={this.timerUpdate}
                  timerSetActive={this.timerSetActive}
                  timerStopActive={this.timerStopActive}
                />
              </CSSTransition>
            ))
          }
        </TransitionGroup>
        <AddTimerGroup addTimerGroup={this.addTimerGroup} />
      </div>
    )
  }
}

export default TimerGrid;
