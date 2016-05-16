import React from 'react';

class LogLine extends React.Component {
    render() {
        let { timeStamp, level, detail } = this.props.line;
        
        if (level === 'Error')
            this.props.addErrorFlag();
        else
            this.props.removeErrorFlag();

        let className = {
            'Info': 'text-info',
            'Error': 'text-danger'
        };

        return (
            <p className={className[level]} key={timeStamp}>{`${timeStamp} - ${level} - ${detail}`}</p>
        );
    }
}

export default LogLine;