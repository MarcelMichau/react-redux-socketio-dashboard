import React from 'react';
import LogLine from './LogLine';
import moment from 'moment';
const socket = io();

export default class Poll extends React.Component {
    constructor(props) {
        super(props);

        socket.on('news', (data) => {
             this.handleIncomingLogMessage(data);           
        });
    }

    clearLogs() {
        this.setState({
            logLines: []
        });
    }

    addInfo() {
        let data = {
            timeStamp: moment(),
            level: 'Info',
            detail: 'An info log event'
        };

        this.handleIncomingLogMessage(data);  
    }

    addError() {
        let data = {
            timeStamp: moment(),
            level: 'Error',
            detail: 'An error log event'
        };

        this.handleIncomingLogMessage(data);  
    }

    handleIncomingLogMessage(data) {
        if (typeof data === 'object') {
            this.props.addLogEntry(data);

            if (data.level === 'Error')
                this.props.addErrorFlag();
            else
                this.props.removeErrorFlag();
        }
    }

    render() {
        return (
            <div>
                <button className='btn btn-primary' onClick={() => this.clearLogs() }>Clear</button>
                <button className='btn btn-info' onClick={() => this.addInfo() }>Add Info</button>
                <button className='btn btn-danger' onClick={() => this.addError() }>Add Error</button>
                { this.props.logLines.map(line => <LogLine key={line.timeStamp} line={line} />) }
            </div>
        );
    }
}