import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';

const DashboardPanel = ({ title, children, hasError }) => {
    let styleName = hasError ? 'danger' : 'success';

    return (
        <div>
            <Panel header={title} bsStyle={styleName}>
                { children }
            </Panel>
        </div>
    );
};

export default DashboardPanel;
