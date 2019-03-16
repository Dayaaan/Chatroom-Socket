// === Initial State ===
const initialState = {
  input: '',
};

// === Types ===
const FORM_CHANGE_INPUT = 'FORM_CHANGE_INPUT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

// === Reducer ===
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FORM_CHANGE_INPUT:
      return {
        ...state,
        input: action.value,
      };

    case SEND_MESSAGE: {
      return {
        ...state,
        input: '',
      };
    }

    default:
      return state;
  }
};

// === Action creators ===
export const changeInput = value => ({
  type: FORM_CHANGE_INPUT,
  value,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});
