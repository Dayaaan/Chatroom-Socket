import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducers'; // nos reducers combinés
import socket from './middlewares/socket'; // notre middleware custom

// compose : les extensions/outils + les middlewares custom
// On utilise la fonction `compose` des redux devtools si elle existe sinon celle de redux
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Composition des enhancers
const enhancers = composeEnhancers(
  applyMiddleware(socket),
);

// Store, configuré avec le reducer et les "enhancers"
const store = createStore(reducer, enhancers);

export default store;
