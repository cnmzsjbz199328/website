import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient';

function Post({ postId, onContentLoaded }) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data, error } = await supabase
                    .from('content')
                    .select('*')
                    .eq('id', postId)
                    .single();
                if (error) throw error;
                setPost(data);
                setLoading(false);
                if (onContentLoaded) {
                    onContentLoaded(data.content);
                }
            } catch (error) {
                setError('Error loading post');
                setLoading(false);
            }
        };
        fetchPost();
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