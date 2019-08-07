import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css';

const Video = (props) => {
    return (
        <div className={"video-" + props.size}>
            <ReactPlayer className="video" url="https://www.youtube.com/watch?v=bBrgb-uLtlE" 
                controls
            />
        </div>
    );
}

export default Video;