import React from 'react';
import './Section.css';
import Post from '../components/Post'; // 更新路径

function SectionPictureRight({postIdtext, postIdphoto}) {

    return (
        <div className='section'>
            <div className="text-container">
            <Post postId={postIdtext} />
            </div>
            <div className="image-container">
                <Post postId={postIdphoto} />
            </div>
        </div>
    );
}

export default SectionPictureRight;
