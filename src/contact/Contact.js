import React from 'react';
import Address from './Address';
import EmailForm from '../emails/EmailForm';

function Contact() {
    return (
        <div>
            <h1>Welcome to Our Contact</h1>
            <p>This is the Contact page of our site.</p>
            <EmailForm />
            <Address />
        </div>
    );
}

export default Contact;