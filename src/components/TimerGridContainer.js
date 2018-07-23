import { connect } from 'react-redux'
import {
  groupAdd,
  groupUpdate,
  groupRemove,
  timerAdd,
  timerUpdate,
  timerRemove
} from '../actions';
import TimerGrid from './TimerGrid';

const mapStateToProps = state => ({
  active: state.active,
  timerGroups: state.timerGroups,
  timers: state.timers
})

const mapDispatchToProps = dispatch => ({
  groupAdd: (key, group) => dispatch(groupAdd(key, group)),
  groupUpdate: (key, group) => dispatch(groupUpdate(key, group)),
  groupRemove: key => dispatch(groupRemove(key)),
  timerAdd: (key, timer) => dispatch(timerAdd(key, timer)),
  timerUpdate: (key, timer) => dispatch(timerUpdate(key, timer)),
  timerRemove: key => dispatch(timerRemove(key)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerGrid);
