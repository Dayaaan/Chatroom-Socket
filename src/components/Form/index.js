/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './form.scss';

/**
 * Code
 */
// la copie qu'on <Form /> ? copyright Nico
class Form extends React.Component {
  handleChange = (evt) => {
    const { value } = evt.target;
    const { changeInput } = this.props;

    changeInput(value);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { sendMessage, inputValue } = this.props;

    const content = inputValue.trim();
    if (content !== '') {
      sendMessage();
    }
  };

  render() {
    const { inputValue } = this.props;

    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <input
          id="form-input"
          placeholder="Votre message"
          type="text"
          value={inputValue}
          autoComplete="off"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Form;
