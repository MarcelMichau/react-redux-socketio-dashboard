import React from 'react';

const LogLine = (props) => {
    let { timeStamp, level, detail } = props.line;
    
    let className = {
        'Info': 'text-info',
        'Error': 'text-danger'
    };
    
    if (level === 'Error') 
        props.addErrorFlag();
    else 
        props.removeErrorFlag();

    return (
        <p className={className[level]} key={timeStamp}>{`${timeStamp} - ${level} - ${detail}`}</p>
    );
}

export default LogLine;