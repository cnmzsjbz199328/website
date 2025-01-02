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
                // Decode Unicode escape sequences and replace \n with <br>
                const decodedContent = data.content
                    ? decodeURIComponent(JSON.parse(`"${data.content.replace(/\"/g, '\\"')}"`))
                        .replace(/\n\n/g, '<br><br>')
                        .replace(/\n/g, '<br>')
                    : null; // 修改：确保 content 为 null 时不进行解码和替换
                setPost({ ...data, content: decodedContent });
                setLoading(false);
                if (onContentLoaded) {
                    onContentLoaded(decodedContent);
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
            {post.content && <p dangerouslySetInnerHTML={{ __html: post.content }}></p>}
            {post.image && (
                <img
                    src={post.image}
                    alt={post.title || 'Post image'} // 修改：确保 alt 属性使用 post.title 或默认值
                    style={{ maxWidth: '100%' }}
                />
            )}
            {!post.title && !post.content && !post.image && <div>No content available</div>}
        </div>
    );
}

export default Post;