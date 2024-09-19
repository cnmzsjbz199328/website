import React from 'react';
import Address from './Address';
import EmailForm from '../emails/EmailForm';

function Contact() {
    return (
        <div>
            <EmailForm />
            <Address />
        </div>
    );
}

export default Contact;