import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post({ postId, onContentLoaded }) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts/${postId}`)
            .then(response => {
                setPost(response.data);
                setLoading(false);
                if (onContentLoaded) {
                    onContentLoaded(response.data.content.rendered); // 调用回调函数，传递文章内容
                }
            })
            .catch(error => {
                console.error('Error fetching post:', error);
                setError(error);
                setLoading(false);
            });
    }, [postId, onContentLoaded]); // 加入 onContentLoaded 依赖

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

export default Post;
