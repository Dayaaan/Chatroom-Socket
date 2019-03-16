// Import : npm
import { connect } from 'react-redux';

// Import : src
import Settings from 'src/components/Settings';

// action creators
import { toggle, changeInput, updateUser } from 'src/store/reducers/settings';


// === State / Données ===
const mapStateToProps = state => ({
  open: state.settings.open,
  userInput: state.settings.input,
});

// === Dispatch / Actions ===
const mapDispatchToProps = dispatch => ({
  toggleSettings: () => {
    dispatch(toggle());
  },
  changeInput: (value) => {
    dispatch(changeInput(value));
  },
  updateCurrentUser: () => {
    dispatch(updateUser());
  },
});

// Container
const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

// Export
export default SettingsContainer;
