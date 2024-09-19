import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AdminPanel.module.css';

function AdminPanel() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Fetching posts...');
        axios.get('http://localhost/community/getAllPosts.php') // 获取所有帖子数据
            .then(response => {
                console.log('Posts fetched successfully:', response.data);
                const postsArray = Object.entries(response.data).map(([id, post]) => ({
                    id,
                    ...post
                })); // 将对象转换为数组，并包含id
                setPosts(postsArray);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading posts:', error);
                setError('Error loading posts');
                setLoading(false);
            });
    }, []);

    const handleInputChange = (postId, field, value) => {
        console.log(`Input change - Post ID: ${postId}, Field: ${field}, Value: ${value}`);
        const updatedPosts = posts.map(post => 
            post.id === postId ? { ...post, [field]: value } : post
        );
        setPosts(updatedPosts);
    };

    const handleSubmit = (postId) => {
        console.log('Submitting post update for postId:', postId);
        console.log('Current posts:', posts);
    
        const post = posts.find(post => post.id === postId);
        if (!post) {
            console.error('Post not found for postId:', postId);
            alert('Post not found');
            return;
        }
    
        console.log('Submitting post update:', post);
    
        // 确保发送的数据格式正确
        const postData = {
            id: post.id,
            title: post.title || '',
            content: post.content || '',
            image: post.image || ''
        };
    
        console.log('Post data to be sent:', postData);
    
        axios.post('http://localhost/community/updatePost.php', postData)
            .then(response => {
                console.log('Post updated successfully:', response.data);
                alert('Post updated successfully');
            })
            .catch(error => {
                console.error('Error updating post:', error);
                alert('Error updating post');
            });
    };

    const adjustTextareaHeight = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    useEffect(() => {
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(textarea => {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        });
    }, [posts]);

    if (loading) {
        console.log('Loading posts...');
        return <div>Loading...</div>;
    }
    if (error) {
        console.error('Error state:', error);
        return <div>{error}</div>;
    }

    return (
        <div className={styles['admin-panel']}>
            {posts.map(post => (
                <div key={post.id} className={styles['post-container']}>
                    <h2>Post ID: {post.id}</h2>
                    <div className={styles['form-group']}>
                        <label>Title:</label>
                        <input
                            type="text"
                            value={post.title || ''} // 默认空值
                            onChange={(e) => handleInputChange(post.id, 'title', e.target.value)}
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label>Content:</label>
                        <textarea
                            value={post.content || ''} // 默认空值
                            onChange={(e) => {
                                handleInputChange(post.id, 'content', e.target.value);
                                adjustTextareaHeight(e);
                            }}
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label>Image URL:</label>
                        <input
                            type="text"
                            value={post.image || ''} // 默认空值
                            onChange={(e) => handleInputChange(post.id, 'image', e.target.value)}
                        />
                    </div>
                    <button onClick={() => handleSubmit(post.id)}>Save</button>
                </div>
            ))}
        </div>
    );
}

export default AdminPanel;