import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient'; // 确保正确导入 supabase 客户端
import styles from './AdminPanel.module.css';

function AdminPanel() {
    const [posts, setPosts] = useState([]);
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 获取所有帖子数据
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase
                    .from('content')
                    .select('*');
                
                if (error) throw error;

                // 解码内容并替换换行符
                const decodedData = data.map(post => ({
                    ...post,
                    content: post.content
                        ? decodeURIComponent(JSON.parse(`"${post.content.replace(/\"/g, '\\"')}"`))
                            .replace(/\n\n/g, '<br><br>')
                            .replace(/\n/g, '<br>')
                        : ''
                }));

                setPosts(decodedData);
                setLoading(false);
            } catch (error) {
                setError('Error loading posts');
                setLoading(false);
            }
        };

        // 获取所有 Email 数据
        const fetchEmails = async () => {
            try {
                const { data, error } = await supabase
                    .from('messages')
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

    const handleInputChange = (postId, field, value) => {
        const updatedPosts = posts.map(post => 
            post.id === postId ? { ...post, [field]: value } : post
        );
        setPosts(updatedPosts);
    };

    const handleContentChange = (postId, html) => {
        handleInputChange(postId, 'content', html);
    };

    const handleSubmit = async (postId) => {
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
    
        try {
            const { error } = await supabase
                .from('content')
                .update(postData)
                .eq('id', postId);

            if (error) throw error;

            alert('Post updated successfully');
        } catch (error) {
            console.error('Error updating post:', error);
            alert('Error updating post');
        }
    };

    const handleFileUpload = async (postId, file) => {
        console.log('Uploading file for postId:', postId, 'File:', file);

        try {
            // 上传新图片
            const { data, error } = await supabase
                .storage
                .from('images')
                .upload(`${file.name}`, file);

            if (error) throw error;

            const imageUrl = `${supabase.storageUrl}/object/public/images/${file.name}`;
            console.log('Image uploaded:', imageUrl);

            // 更新内容数据中的新图片URL
            handleInputChange(postId, 'image', imageUrl);

            // 更新数据库中的帖子数据
            const postData = { image: imageUrl };
            const { error: updateError } = await supabase
                .from('content')
                .update(postData)
                .eq('id', postId);

            if (updateError) throw updateError;

            // 删除旧图片（如果存在）
            const post = posts.find(post => post.id === postId);
            if (post && post.image) {
                const oldImagePath = post.image.replace(`${supabase.storageUrl}/object/public/images/`, '');
                await supabase
                    .storage
                    .from('images')
                    .remove([oldImagePath]);
                console.log('Old image deleted:', oldImagePath);
            }

            alert('Image uploaded and post updated successfully');
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Error uploading image');
        }
    };

    const handleDeleteEmail = async (id) => {
        try {
            const { error } = await supabase
                .from('messages')
                .delete()
                .eq('id', id);

            if (error) throw error;

            setEmails(emails.filter(email => email.id !== id));
            alert('Email deleted successfully');
        } catch (error) {
            console.error('Error deleting email:', error);
            alert('Error deleting email');
        }
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
                                    <button onClick={() => handleDeleteEmail(email.id)}>Delete</button>
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
                                <div
                                    contentEditable
                                    className={styles['content-editable']}
                                    dangerouslySetInnerHTML={{ __html: post.content || '' }}
                                    onInput={(e) => handleContentChange(post.id, e.currentTarget.innerHTML)}
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