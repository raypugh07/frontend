import React from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import './Video.css';

const Video = (props) => {
    const convoReq = props.match.params.id;
    let hasSent = false;
    const finishConvo = ({ played }) => {
        if(played >= 0.9 && !hasSent) {
            axios.delete(`https://empoweredconversation.herokuapp.com/conversations/finished/${convoReq}`).then(res => {
                console.log(res, 'from res');
            }).catch(err => {
                console.log(err, 'from err');
            })
            hasSent = true;
        }
        console.log(played);
    }

    return (
        <div className={"video-" + props.size}>
            <ReactPlayer className="video" url="https://www.youtube.com/watch?v=bBrgb-uLtlE" 
                controls
                onProgress={finishConvo}
            />
        </div>
    );
}

export default Video;