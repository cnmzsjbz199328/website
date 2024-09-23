import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AdminPanel.module.css';
import config from '../config';

function AdminPanel() {
    const [posts, setPosts] = useState([]);
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 获取所有帖子数据
        axios.get(`${config.API_BASE_URL}/getAllPosts.php`)
            .then(response => {
                const postsArray = Object.entries(response.data).map(([id, post]) => ({
                    id: parseInt(id, 10),
                    ...post
                })); // 将对象转换为数组，并包含id
                setPosts(postsArray);
                setLoading(false);
            })
            .catch(error => {
                setError('Error loading posts');
                setLoading(false);
            });

        // 获取所有 Email 数据
        axios.get(`${config.API_BASE_URL}/getEmail.php`)
            .then(response => {
                setEmails(response.data);
            })
            .catch(error => {
                console.error('Error fetching emails:', error);
            });
    }, []);

    const handleInputChange = (postId, field, value) => {
        const updatedPosts = posts.map(post => 
            post.id === postId ? { ...post, [field]: value } : post
        );
        setPosts(updatedPosts);
    };

    const handleSubmit = (postId) => {
        const post = posts.find(post => post.id === postId);
        if (!post) {
            alert('Post not found');
            return;
        }
    
        // 构建 postData 对象，只包含非空字段
        const postData = { id: post.id };
        if (post.title) postData.title = post.title;
        if (post.content) postData.content = post.content;
        if (post.image) postData.image = post.image;

        console.log('Submitting post data:', postData);
    
        axios.post(`${config.API_BASE_URL}/updatePost.php`, postData)
            .then(response => {
                console.log('Post updated successfully:', response.data);
                alert('Post updated successfully');
            })
            .catch(error => {
                console.error('Error updating post:', error);
                alert('Error updating post');
            });
    };

    const handleFileUpload = (postId, file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('postId', postId);

        console.log('Uploading file for postId:', postId, 'File:', file);

        axios.post(`${config.API_BASE_URL}/uploadImage.php`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log('Image uploaded successfully:', response.data);
            if (response.data.log) {
                console.log('Server log:', response.data.log);
            }
            alert('Image uploaded successfully');
        })
        .catch(error => {
            console.error('Error uploading image:', error);
            if (error.response && error.response.data && error.response.data.log) {
                console.error('Server log:', error.response.data.log);
            }
            alert('Error uploading image');
        });
    };

    const handleDeleteEmail = (index) => {
        const email = emails[index];
        axios.post(`${config.API_BASE_URL}/deleteEmail.php`, { index })
            .then(response => {
                console.log('Email deleted successfully:', response.data);
                setEmails(emails.filter((_, i) => i !== index));
                alert('Email deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting email:', error);
                alert('Error deleting email');
            });
    };

    const scrollToSection = (startId, endId = startId) => {
        const section = posts.find(post => post.id >= startId && post.id <= endId);
        if (section) {
            document.getElementById(`post-${section.id}`).scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {/* 新增的 Email 信息表格 */}
            <div className={styles['email-table-container']}>
                <div className={styles['email-table-header']}>Email Information</div>
                <table className={styles['email-table']}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Timestamp</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emails.map((email, index) => (
                            <tr key={index}>
                                <td>{email.name}</td>
                                <td>{email.email}</td>
                                <td>{email.subject}</td>
                                <td>{email.message}</td>
                                <td>{email.timestamp}</td>
                                <td>
                                    <button onClick={() => handleDeleteEmail(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <nav className={styles.navbar}>
                <div>
                    <a href="#logo" onClick={() => scrollToSection(1)}>Logo</a>
                    <a href="#aboutus" onClick={() => scrollToSection(2, 10)}>About Us</a>
                    <a href="#services" onClick={() => scrollToSection(11, 20)}>Services</a>
                    <a href="#activities" onClick={() => scrollToSection(21, 38)}>Activities</a>
                    <a href="#venuehire" onClick={() => scrollToSection(39, 50)}>Venue Hire</a>
                    <a href="#volunteering" onClick={() => scrollToSection(54, 63)}>Volunteering</a>
                </div>
            </nav>
            <table className={styles['admin-table']}>
                <thead>
                    <tr>
                        <th>Post ID</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Image</th>
                        <th>Upload</th>
                        <th>Save</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id} id={`post-${post.id}`}>
                            <td data-label="Post ID">{post.id}</td>
                            <td data-label="Title">
                                <input
                                    type="text"
                                    value={post.title || ''}
                                    onChange={(e) => handleInputChange(post.id, 'title', e.target.value)}
                                />
                            </td>
                            <td data-label="Content">
                                <textarea
                                    value={post.content || ''}
                                    onChange={(e) => handleInputChange(post.id, 'content', e.target.value)}
                                />
                            </td>
                            <td data-label="Image">
                                {post.image && <img src={post.image} alt="Post Image" className={styles['post-image']} />}
                            </td>
                            <td data-label="Upload">
                                <input
                                    type="file"
                                    onChange={(e) => handleFileUpload(post.id, e.target.files[0])}
                                />
                            </td>
                            <td data-label="Save"><button onClick={() => handleSubmit(post.id)}>Save</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPanel;