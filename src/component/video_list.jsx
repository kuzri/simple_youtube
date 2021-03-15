import React from 'react';
import VideoItem from './video_item';

const Videolist = (props) => (
            <ul>
                {props.videos.map(video =>( <VideoItem key={video.id.videoId} video={video}/>
                ))}
            </ul>
    );

export default Videolist;