// Import : npm
import { connect } from 'react-redux';

// Import : src
import Message from 'src/components/Messages/Message';

// === State / Données ===
const mapStateToProps = (state, ownProps) => ({
  ...state.messages.list[ownProps.id],
  myself: state.settings.user === state.messages.list[ownProps.id].user,
});

// === Dispatch / Actions ===
const mapDispatchToProps = {};

// Container
const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);

// Export
export default MessageContainer;
