import React from 'react';
import InternalServices from './InternalServices';
import ExternalServices from './ExternalServices';

function Services() {
    return (
        <div>
            <h1>Our Services</h1>
            <p>Here you can find all the services we offer:</p>
            <InternalServices />
            <ExternalServices />
        </div>
    );
}

export default Services;