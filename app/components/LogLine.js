import React from 'react';

class LogLine extends React.Component {
    componentWillMount() {
        if (this.props.level === 'Error')
            this.props.addErrorFlag();
        else
            this.props.removeErrorFlag();
    }

    render() {
        let { timeStamp, level, detail } = this.props.line;

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