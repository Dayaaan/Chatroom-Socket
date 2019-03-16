/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import './app.scss';
/**
 * Code
 */
const App = () => (
  <div id="app">
    <h1 id="app-title">Chatroom</h1>
    <Messages />
    <Form />
    <Settings />
  </div>
);

/**
 * Export
 */
export default App;
