// Import : npm
import { connect } from 'react-redux';

// Import : src
import Messages from 'src/components/Messages';

// === State / Données ===
const mapStateToProps = state => ({
  ids: state.messages.ids,
});

// === Dispatch / Actions ===
const mapDispatchToProps = {};

// Container
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

// Export
export default MessagesContainer;
