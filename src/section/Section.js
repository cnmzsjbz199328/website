import React from 'react';
import styles from './Section.module.css';
import Post from '../components/Post'; // 更新路径

function Section({postId}) {

    return (
        <div>
            <div >
            <Post postId={postId} />
            </div>
        </div>
    );
}

export default Section;
