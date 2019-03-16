// === Initial State ===
const initialState = {
  user: 'anonymous',
  open: false,
  input: 'anonymous',
};

// === Types ===
const SETTINGS_TOGGLE = 'SETTINGS_TOGGLE';
const SETTINGS_CHANGE_INPUT = 'SETTINGS_CHANGE_INPUT';
const SETTINGS_UPDATE_USER = 'SETTINGS_UPDATE_USER';

// === Reducer ===
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SETTINGS_TOGGLE:
      return {
        ...state,
        open: !state.open,
      };

    case SETTINGS_CHANGE_INPUT:
      return {
        ...state,
        input: action.value,
      };

    case SETTINGS_UPDATE_USER:
      return {
        ...state,
        user: state.input,
        open: false,
      };

    default:
      return state;
  }
};

// === Action creators ===
export const toggle = () => ({
  type: SETTINGS_TOGGLE,
});

export const changeInput = value => ({
  type: SETTINGS_CHANGE_INPUT,
  value,
});

export const updateUser = () => ({
  type: SETTINGS_UPDATE_USER,
});
