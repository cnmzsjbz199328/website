import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post({ postId }) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(`Fetching post with ID: ${postId}`); // 添加日志
        axios.get(`http://localhost/community/getPost.php?postId=${postId}`)
            .then(response => {
                console.log('Post data received:', response.data); // 添加日志
                setPost(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching post:', error); // 添加日志
                setError('Error loading post');
                setLoading(false);
            });
    }, [postId]); // 只依赖 postId

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!post) return <div>No post found!</div>;

    console.log('Rendering post:', post); // 添加日志

    return (
        <div className="post">
            {post.title && <h2>{post.title}</h2>}
            {post.content && <p dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}></p>}
            {post.image && (
                <img
                    src={post.image}
                    alt={post.title || 'Post image'}
                    style={{ maxWidth: '100%' }}
                    onLoad={() => console.log(`Image loaded: ${post.image}`)} // 添加日志
                    onError={() => console.error(`Error loading image: ${post.image}`)} // 添加日志
                />
            )}
            {!post.title && !post.content && !post.image && <div>No content available</div>}
        </div>
    );
}

export default Post;