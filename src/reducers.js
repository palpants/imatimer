import {
  GROUP_ADD,
  GROUP_UPDATE,
  GROUP_REMOVE,
  TIMER_ADD,
  TIMER_UPDATE,
  TIMER_REMOVE,
  //RECORD_START,
  //RECORD_END,
  ACTIVE_SET,
  ACTIVE_STOP,
} from './actions';

function groupAdd(state, action) {
  const groups = { ...state.timerGroups };
  groups[action.key] = action.group;

  const newState = {...state};
  newState.timerGroups = groups;
  return newState;
}

function groupUpdate(state, action) {
  const groups = { ...state.timerGroups };
  groups[action.key] = action.group;

  const newState = {...state};
  newState.timerGroups = groups;
  return newState;
}

function groupRemove(state, action) {
  const groups = { ...state.timerGroups };
  delete groups[action.key];

  const newState = {...state};
  newState.timerGroups = groups;
  return newState;
}

function timerAdd(state, action) {
  const timers = { ...state.timers };
  timers[action.key] = action.timer;

  const newState = {...state};
  newState.timers = timers;
  return newState;
}

function timerUpdate(state, action) {
  const timers = { ...state.timers };
  timers[action.key] = action.timer;

  const newState = {...state};
  newState.timers = timers;
  return newState;
}

function timerRemove(state, action) {
  const timers = { ...state.timers };
  delete timers[action.key];

  const newState = {...state};
  newState.timers = timers;
  return newState;
}

/*
function recordStart(state, action) {

}

function recordEnd(state, action) {

}
*/

function activeSet(state, action) {
  const newState = {...state};
  newState.active = action.active;
  return newState;
}

function activeStop(state, action) {
  const newState = {...state};
  newState.active = {
    timerGroup: null,
    timer: null,
    record: null,
  };
  return newState;
}


const timerReducers = (state = {}, action) => {
  if (GROUP_ADD === action.type) {
    return groupAdd(state, action);
  } else if (GROUP_UPDATE === action.type) {
    return groupUpdate(state, action);
  } else if (GROUP_REMOVE === action.type) {
    return groupRemove(state, action);
  } else if (TIMER_ADD === action.type) {
    return timerAdd(state, action);
  } else if (TIMER_UPDATE === action.type) {
    return timerUpdate(state, action);
  } else if (TIMER_REMOVE === action.type) {
    return timerRemove(state, action);
  } else if (ACTIVE_SET === action.type) {
    return activeSet(state, action);
  } else if (ACTIVE_STOP === action.type) {
    return activeStop(state, action);
  } else {
    return state;
  }
}

const rootReducer = timerReducers;

export default rootReducer;
