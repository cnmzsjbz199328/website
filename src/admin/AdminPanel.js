import React, { useState, useEffect } from 'react';
import styles from './AdminPanel.module.css';

function AdminPanel() {
    const [posts, setPosts] = useState([]);
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch posts using Supabase
        const fetchPosts = async () => {
            try {
                const { data, error } = await window.supabaseClient
                    .from('posts')
                    .select('*');
                
                if (error) throw error;
                setPosts(data);
                setLoading(false);
            } catch (error) {
                setError('Error loading posts');
                setLoading(false);
            }
        };

        // Fetch emails using Supabase
        const fetchEmails = async () => {
            try {
                const { data, error } = await window.supabaseClient
                    .from('emails')
                    .select('*');
                
                if (error) throw error;
                setEmails(data);
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };

        fetchPosts();
        fetchEmails();
    }, []);

    // ... rest of your AdminPanel code
}

export default AdminPanel;