// list  items
import React from "react";

const VideoListItem = ({ video }) => { // in here with curly braces we say the first object in the arguments has a property video, grab that video and declare a new variable called video
     console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/> {/* space for image like a thumbnail */} {/* Javascript variables with jsx is must be in curly braces!!! */}
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div> {/* video title */}
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;


/* (props) => {
    const video = props.video;
} */