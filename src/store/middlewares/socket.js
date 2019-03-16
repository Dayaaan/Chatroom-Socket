// Import : src
import { SEND_MESSAGE } from 'src/store/reducers/form';
import { messageReceived } from 'src/store/reducers/messages';

// === Types ===
const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';

// === Code ===
let socket;

// === Middleware ===
const socketMiddleware = store => next => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      socket = window.io();

      socket.on('send_message', (message) => {
        console.log(message);
        store.dispatch(messageReceived(message));
      });
      break;

    case SEND_MESSAGE: {
      const state = store.getState();

      const newMessage = {
        user: state.settings.user,
        message: state.form.input.trim(),
      };

      socket.emit('send_message', newMessage);
      break;
    }

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

// === Action creator ===
export const wsConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

// Export
export default socketMiddleware;
