// === Initial State ===
const initialState = {
  list: {},
  ids: [],
};

// === Types ===
const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';

// === Reducer ===
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return {
        ...state,
        ids: [...state.ids, action.message.id],
        list: {
          ...state.list,
          [action.message.id]: action.message,
        },
      };

    default:
      return state;
  }
};

// === Action creators ===
export const messageReceived = message => ({
  type: MESSAGE_RECEIVED,
  message,
});
