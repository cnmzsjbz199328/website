import React, { useState } from 'react';
import './EmailForm.css';

function EmailForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { error } = await window.supabaseClient
                .from('emails')
                .insert([formData]);

            if (error) throw error;

            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending message');
        }
    };

    // ...existing code for return statement...
}

export default EmailForm;