import React from 'react';
import InternalServices from './InternalServices';
import ExternalServices from './ExternalServices';

function Services() {
    return (
        <div>
            <InternalServices />
            <ExternalServices />
        </div>
    );
}

export default Services;