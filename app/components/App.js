import React from 'react';
import PollContainer from '../containers/PollContainer';
import DashboardPanelContainer from '../containers/DashboardPanelContainer';

const App = () => (
    <div className='container'>
        <DashboardPanelContainer title='Panel Title'>
            <PollContainer />
        </DashboardPanelContainer>
    </div>
);

export default App;
