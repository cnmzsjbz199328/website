import React, { useState } from 'react';
import supabase from '../supabaseClient'; // 确保正确导入 supabase 客户端
import './EmailForm.css';

function EmailForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const { error } = await supabase
                .from('messages')
                .insert([formData]);

            if (error) throw error;

            setSuccess(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error:', error);
            setError('Error sending message');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="email-form-container">
            <div className="form-container">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button" disabled={loading}>
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                    {error && <div className="error-message">{error}</div>}
                    {success && <div className="success-message">Message sent successfully!</div>}
                </form>
            </div>
            <div className="contact-us-animation">
                <img src="/email.gif" alt="Contact Us Animation" />
            </div>
        </div>
    );
}

export default EmailForm;