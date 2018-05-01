// This is just some sample data so you don't have to think of your own!
const timers = {
  active: {
    timerGroup: 1,
    timer: 2
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
        1: {
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

export default timers;
