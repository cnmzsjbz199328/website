import React from 'react';
import './Section.css';
import Page from '../components/Page'; // 更新路径

function Section({pageId}) {

    return (
        <div>
            <div >
            <Page pageId={pageId} />
            </div>
        </div>
    );
}

export default Section;
