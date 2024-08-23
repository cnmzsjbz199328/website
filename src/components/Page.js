import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './wordpress-styles.css';

function Page({ pageId }) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost/wordpress/wp-json/wp/v2/pages/${pageId}`)
            .then(response => {
                setPost(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
                setError(error);
                setLoading(false);
            });
    }, [pageId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading post!</div>;
    if (!post) return <div>No post found!</div>;

    return (
        <>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </>
    );
}

export default Page;

