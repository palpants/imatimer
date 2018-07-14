// This is some sample data
const sample = {
  active: {
    timerGroup: 1,
    timer: 2,
    record: 2,
  },
  timerGroups: {
    1: {
      title: 'Timer Group 1'
    },
    2: {
      title: 'Timer Group 2'
    }
  },
  timers: {
    1: {
      title: 'I like to time',
      groupId: 1,
      time: 63
    },
    2: {
      title: 'A second timer',
      groupId: 1,
      time: 60
    },
    3: {
      title: 'Third timer',
      groupId: 2,
      time: 67
    }
  },
  records: {
    1: {
      timer: 2,
      start: 0,
      end: 34,
    },
    2: {
      timer: 1,
      start: 0,
      end: 33,
    }
  }
};

export default sample;

/*
const sample = {
  active: {
    timerGroup: 1,
    timer: 2,
    record: 2,
  },
  timerGroups: {
    1: {
      title: 'Timer Group 1',
      time: 123,
      timers: {
        1: {
          title: 'I like to time',
          time: 63,
          records: {
            1: {
              start: 0,
              end: 33,
            },
            2: {
              start: 0,
              end: 30,
            },
          },
        },
        2: {
          title: 'A second timer',
          time: 60,
          records: {
            1: {
              start: 0,
              end: 20,
            },
            2: {
              start: 0,
              end: 40,
            },
          },
        },
      },
    },
    2: {
      title: 'Timer Group 2',
      time: 67,
      timers: {
        3: {
          title: 'This is a timer',
          time: 67,
          records: {
            1: {
              start: 0,
              end: 34,
            },
            2: {
              start: 0,
              end: 33,
            },
          },
        },
      },
    },
  },
};
*/
