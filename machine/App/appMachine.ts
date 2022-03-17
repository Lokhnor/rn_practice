import { createMachine, assign } from 'xstate';

export const appMachine = createMachine({
  id: 'screens',
  initial: 'idle',
  context: {
    currentScreen: null,
  },
  states: {
    idle: {},
    changeScreen: {},
  },
  on: {
    CHANGE_SCREEN: {
      target: '.changeScreen',
      actions: assign({
        currentScreen: (context, event) => event.name,
      }),
    },
  },
});
