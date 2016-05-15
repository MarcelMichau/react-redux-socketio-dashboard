import React from 'react';
import Poll from './Poll';
import DashboardPanelContainer from '../containers/DashboardPanelContainer';

const App = () => (
    <div className='container'>
        <DashboardPanelContainer title='Panel Title'>
            <Poll />
        </DashboardPanelContainer>
    </div>
);

export default App;
