// Import : npm
import { connect } from 'react-redux';

// Import : src
import Form from 'src/components/Form';
import { changeInput, sendMessage } from 'src/store/reducers/form';

// === State / Données ===
const mapStateToProps = state => ({
  inputValue: state.form.input,
});

// === Dispatch / Actions ===
const mapDispatchToProps = dispatch => ({
  changeInput: (value) => {
    dispatch(changeInput(value));
  },
  sendMessage: () => {
    dispatch(sendMessage());
  },
});

// Container
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

// Export
export default FormContainer;
