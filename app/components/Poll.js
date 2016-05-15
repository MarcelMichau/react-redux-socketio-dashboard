import React from 'react';
import LogLineContainer from '../containers/LogLineContainer';
const socket = io();
const NUMBER_OF_LOG_ENTRIES = 10;

export default class Poll extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logLines: []
        };

        socket.on('news', (data) => {
            if (typeof data === 'object') {
                if (this.state.logLines.length < NUMBER_OF_LOG_ENTRIES){
                    this.setState({
                        logLines: this.state.logLines.concat([data])
                    });
                } else {
                    this.setState({
                        logLines: this.state.logLines.slice(1, NUMBER_OF_LOG_ENTRIES).concat([data])
                    });
                }
            }
        });
    }

    clearLogs() {
        this.setState({
            logLines: []
        });
    }

    render() {
        return (
            <div>
                <button className='btn btn-info' onClick={() => this.clearLogs() }>Clear</button>
                { this.state.logLines.map(line => <LogLineContainer key={line.timeStamp} line={line} />) }
            </div>
        );
    }
}