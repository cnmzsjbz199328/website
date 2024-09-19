import React from 'react';
import './Logo.css';
import Post from '../components/Post';

function Logo() {
    return (
        <div className='logo-container'>
            <Post postId={1} />
        </div>
    );
}

export default Logo;

