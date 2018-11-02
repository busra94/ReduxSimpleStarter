// component for the list videos

// this component doesn't need any user interaction, 
// it doesn't render itself in any fashion,
// so we make it just a plain functional component

import React from 'react';

const VideoList = (props) => {
    // const videos = prop.videos, in here videos is the video list 
    return (
        <ul className="col-md-4 list-group">
        {props.videos.length} 
        {/* we see length 0 first because we are making a network request to youtube api and it takes some amount of time, 
        we do not know when we get the response from api - fetching data and setting it on the state takes some time
        and between this operation we see 0 of length */}
        </ul>
    )
}

export default VideoList;