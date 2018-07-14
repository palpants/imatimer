export const GROUP_ADD = 'GROUP_ADD';
export const GROUP_REMOVE = 'GROUP_REMOVE';
export const GROUP_UPDATE = 'GROUP_UPDATE';
export const TIMER_ADD = 'TIMER_ADD';
export const TIMER_REMOVE = 'TIMER_REMOVE';
export const TIMER_UPDATE = 'TIMER_UPDATE';
//export const RECORD_START = 'RECORD_START';
//export const RECORD_END = 'RECORD_END';
export const ACTIVE_SET = 'ACTIVE_SET';
export const ACTIVE_STOP = 'ACTIVE_STOP';

export function groupAdd(key, group) {
  return {
    type: GROUP_ADD,
    key: key,
    group: group
  }
}

export function groupUpdate(key, group) {
  return {
    type: GROUP_UPDATE,
    key: key,
    group: group
  }
}

export function groupRemove(key) {
  return {
    type: GROUP_REMOVE,
    key: key
  }
}

export function timerAdd(key, timer) {
  return {
    type: TIMER_ADD,
    key: key,
    timer: timer
  }
}

export function timerUpdate(key, timer) {
  return {
    type: TIMER_UPDATE,
    key: key,
    timer: timer
  }
}

export function timerRemove(key) {
  return {
    type: TIMER_REMOVE,
    key: key
  }
}
/*
export function recordStart(groupKey, key, recordKey, record) {
  return {
    type: RECORD_START,
    groupKey: groupKey,
    key: key,
    recordKey: recordKey,
    record: record
  }
}

export function recordEnd(groupKey, key, recordKey, record) {
  return {
    type: RECORD_END,
    groupKey: groupKey,
    key: key,
    recordKey: recordKey,
    record: record
  }
}
*/
export function activeSet(active) {
  return {
    type: ACTIVE_SET,
    active: active
  }
}

export function activeStop() {
  return {
    type: ACTIVE_STOP
  }
}
