// list  items
import React from "react";

const VideoListItem = ({video}) => { // in here with curly braces we say the first object in the arguments has a property video, grab that video and declare a new variable called video
    console.log(video);
    return <li>Video</li>
};

export default VideoListItem;


/* (props) => {
    const video = props.video;
} */