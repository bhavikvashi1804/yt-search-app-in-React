import React from 'react';

const VideoList=({video})=>{
    return (
        <div>
            {video.snippet.title}
        </div>
    );
}

export default VideoList;