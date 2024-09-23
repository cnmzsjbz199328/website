import React from 'react';
import InternalServices from './InternalServices';
import ExternalServices from './ExternalServices';

function Services() {
    return (
        <div class="container" >               
            <InternalServices />
            <ExternalServices />
        </div>
    );
}

export default Services;