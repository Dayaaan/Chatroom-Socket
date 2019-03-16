/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Message from 'src/containers/Messages/Message';
import './messages.scss';

/**
 * Code
 */
class Messages extends React.Component {
  componentDidUpdate() {
    // const messagesDOM = document.getElementById('messages');
    this.domElement.scrollTo(0, this.domElement.scrollHeight);
    console.log('update');
  }

  // La reférence à l'élément du dom est tramise par React dom et à `ref`
  saveRef = (element) => {
    this.domElement = element;
  };

  render() {
    const { ids } = this.props;
    console.log('RENDER');
    return (
      <div id="messages" ref={this.saveRef}>
        {ids.map(id => (
          <Message
            key={id}
            id={id}
          />
        ))}
      </div>
    );
  }
}

Messages.propTypes = {
  ids: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default Messages;
