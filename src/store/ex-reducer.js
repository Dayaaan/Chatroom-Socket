/**
 * Initial State
 */
const initialState = {
  // Messages
  list: [],

  // Form
  formInput: '',

  // Settings
  currentUser: 'anonymous',
  settingsInput: 'anonymous',
  settingsOpen: false,
};

/**
 * Types
 */
// Settings
const SETTINGS_TOGGLE = 'SETTINGS_TOGGLE';
const SETTINGS_CHANGE_INPUT = 'SETTINGS_CHANGE_INPUT';
const SETTINGS_UPDATE_USER = 'SETTINGS_UPDATE_USER';

// Form
const FORM_CHANGE_INPUT = 'FORM_CHANGE_INPUT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

// Message
const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Settings
    case SETTINGS_TOGGLE:
      return {
        ...state,
        settingsOpen: !state.settingsOpen,
      };

    case SETTINGS_CHANGE_INPUT:
      return {
        ...state,
        settingsInput: action.value,
      };

    case SETTINGS_UPDATE_USER:
      return {
        ...state,
        currentUser: state.settingsInput,
        settingsOpen: false,
      };

    // Form
    case FORM_CHANGE_INPUT:
      return {
        ...state,
        formInput: action.value,
      };

    case SEND_MESSAGE: {
      return {
        ...state,
        formInput: '',
      };
    }

    // Message
    case MESSAGE_RECEIVED:
      return {
        ...state,
        list: [...state.list, action.message],
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
// Settings
export const toggleSettings = () => ({
  type: SETTINGS_TOGGLE,
});

export const changeInputSettings = value => ({
  type: SETTINGS_CHANGE_INPUT,
  value,
});

export const updateCurrentUser = () => ({
  type: SETTINGS_UPDATE_USER,
});

// Form
export const changeInputForm = value => ({
  type: FORM_CHANGE_INPUT,
  value,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const messageReceived = message => ({
  type: MESSAGE_RECEIVED,
  message,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
