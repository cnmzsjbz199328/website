import React from 'react';
import './Logo.css';
import Post from '../components/Post';

function Logo({postLogoId}) {
    return (
        <div className='logo-container'>
            <Post postId={postLogoId} />
        </div>
    );
}

export default Logo;

