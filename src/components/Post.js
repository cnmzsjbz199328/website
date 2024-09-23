import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

function Post({ postId, onContentLoaded }) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${config.API_BASE_URL}/getPost.php?postId=${postId}`)
            .then(response => {
                setPost(response.data);
                setLoading(false);
                if (onContentLoaded) {
                    onContentLoaded(response.data.content);
                }
            })
            .catch(error => {
                setError('Error loading post');
                setLoading(false);
            });
    }, [postId, onContentLoaded]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!post) return <div>No post found!</div>;

    return (
        <div className="post">
            {post.title && <h2>{post.title}</h2>}
            {post.content && <p dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}></p>}
            {post.image && (
                <img
                    src={post.image}
                    alt={post.title || 'Post image'}
                    style={{ maxWidth: '100%' }}
                />
            )}
            {!post.title && !post.content && !post.image && <div>No content available</div>}
        </div>
    );
}

export default Post;