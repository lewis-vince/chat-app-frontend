import React, { Component } from 'react';
import ChatPanel from './chatPanel/ChatPanel';
import { PropTypes } from 'prop-types';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            messages: [
                {
                    message: "Test message 1",
                    senderId: 1,
                    timestamp: "2015-03-25T12:00:00Z"
                },
                {
                    message: "Test message 2",
                    senderId: 3,
                    timestamp: "2015-03-25T13:00:00Z"
                },
                {
                    message: "Test message 3",
                    senderId: 2,
                    timestamp: "2015-03-25T15:00:00Z"
                },
            ]
        };
    }

    render() {
        return (
            <ChatPanel messages={this.props.messages} />
        );
    }
}

App.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        message: PropTypes.string,
        senderId: PropTypes.number,
        timestamp: PropTypes.string,
    })).isRequired,
}