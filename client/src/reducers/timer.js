const initState = {
  isOn: true,
  expires: '',
};

export const timer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TIMER':
      return {
        isOn: true,
        expires: action.payload,
      };
    case 'STOP_TIMER':
      return {
        isOn: false,
        expires: null,
      };

    default:
      return state;
  }
};
