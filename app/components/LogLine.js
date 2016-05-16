import React from 'react';

const LogLine = (props) => {
    let { timeStamp, level, detail } = props.line;

    let className = {
        'Info': 'text-info',
        'Error': 'text-danger'
    };

    return (
        <p className={className[level]} key={timeStamp}>{`${timeStamp} - ${level} - ${detail}`}</p>
    );
}

export default LogLine;