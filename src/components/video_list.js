// component for the list videos

// this component doesn't need any user interaction, 
// it doesn't render itself in any fashion,
// so we make it just a plain functional component

import React from 'react';
import VideoListItem from "./video_list_item"; // ./ means current directory

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => { // this function called for each item in the video list(each element of videos will have a function that gets called with a single video)

        return <VideoListItem video={video} />

    });


    return (
        <ul className="col-md-4 list-group"> {/* to use javascript variable in jsx we must use curly braces {} */}
            {videoItems}
        </ul>
    )
}

export default VideoList;




{/* {props.videos.length}
 we see length 0 first because we are making a network request to youtube api and it takes some amount of time, 
we do not know when we get the response from api - fetching data and setting it on the state takes some time
and between this operation we see 0 of length */}