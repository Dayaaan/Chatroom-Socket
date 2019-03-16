/**
 * npm import
 */
import { combineReducers } from 'redux';

/**
 * Local import
 */
import messages from 'src/store/reducers/messages';
import form from 'src/store/reducers/form';
import settings from 'src/store/reducers/settings';


const reducers = combineReducers({
  messages,
  form,
  settings,
});

/**
 * Export
 */
export default reducers;
