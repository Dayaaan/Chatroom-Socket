/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local import
 */
import './settings.scss';

/**
 * Code
 */
class Settings extends React.Component {
  handleChange = (evt) => {
    const { value } = evt.target;
    const { changeInput } = this.props;
    // J'exécute changeInput pour transmettre la nouvelle valeur
    changeInput(value);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { updateCurrentUser } = this.props;

    updateCurrentUser();
  };

  render() {
    const { open, toggleSettings, userInput } = this.props;

    const classCSS = classNames({
      'settings--open': open,
    });

    return (
      <div id="settings" className={classCSS}>
        <div id="settings-toggle" onClick={toggleSettings} />
        <form autoComplete="off" id="settings-form" onSubmit={this.handleSubmit}>
          <input
            id="settings-input"
            type="text"
            placeholder="Username"
            value={userInput}
            onChange={this.handleChange}
          />
          <button id="settings-button" type="submit">
            ok
          </button>
        </form>
      </div>
    );
  }
}

Settings.propTypes = {
  userInput: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  toggleSettings: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  updateCurrentUser: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Settings;
