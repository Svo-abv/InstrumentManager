import { observer } from 'mobx-react';
import React from 'react';
import DashboardContent from '../components/DashboardContent';

const Panel = observer(() => {
    return (
        <div>
            <DashboardContent />
        </div>
    );
});

export default Panel;