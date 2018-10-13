import React from 'react';
import PropTypes from 'prop-types';

const ChatPanel = () => {
    return (
        <div>
            TEST
        </div>
    );
}

ChatPanel.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        message: PropTypes.string,
        senderId: PropTypes.number,
        timestamp: PropTypes.string,
    })).isRequired,
}

export default ChatPanel;