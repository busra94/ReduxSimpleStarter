// video player and video title
// this component makes sure that the user can actually see the selected video and play it   

// Do I expect this component to need to maintain any type of state? The answer is NO.
// The video player we are going to use here is a youtube embed. The video detail
// only needs to be care about(video title, description and url). Because those all properties
// are available through props as they're going to be passed down from the App component(index.js)
// SO We don't really need any state on the video detail. We just need a functional component.

import React from 'react';

const VideoDetail = ({video}) =>{ // in here with curly braces we say the first object in the arguments has a property video, grab that video and declare a new variable called video
   
    const videoId = video.id.videoId;
    // pulling to this url and creating an iframe will show a youtube video player inside of our application for us. 
    const url = `http://www.youtube.com/embed/${videoId}`; // string interpolation(template strings)  `(back tick)
    // const url = 'http://www.youtube.com/embed/' + videoId; // whenever we want to embed a video or like navigate the video the only thing that changes in the url is the actual idd of the video.
        return (
        <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9"> {/* this is going to be IFrame that we're going to use to display the video. */}
        <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
        <div>{video.snippet.title}</div> {/* title */}
        <div>{video.snippet.description}</div> {/* video description */}
        </div>
        </div>
    );

};

export default VideoDetail; 

/* const VideoDetail = (props) =>{
    // props has a property video 
}; */