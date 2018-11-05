import React, { Component } from 'react'; /* go find the library 'react' installed in my application as dependency and assign it to the variable React [Core React Library]  */
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // we need to specify path because possible we have more than one search_bar.js file.   
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyD34FV1scycwDox7XEDX3JTXWR3SqHVGGk";

// Create a component. This component should produce 
// some HTML [Make component]
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] }; // videos -> property name of state, {} -> this is an empty object

        // to make sure the user see some videos immediately we move it into App component.
        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => { // 'videos' returns from function is list of videos.
            this.setState({ videos }); // this came from es6 syntax, if key and value names are same we can use this syntax.
            //   this.setState({videos: videos}); // we assign videos to videos array.     
        }); 
    }
    
    /* In between the time that it takes youtube request to finish, the component
    still attempts to render itself, so this.state.videos is still an empty array. /* 
    /* so in here {this.state.videos[0]} is undefined and we are passing undefined to videodetail
    in videodetail here const videoId = video.id.videoId; we are getting error id is undefined, we are passing video undefined.
    to solve this we add a check to video_detail to make sure video has been provided before it attempts to render. */  

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/> {/*  <VideoDetail /> in here we have array of videos */}
                {/* app is the parent of videolist, videolist needs to get access to list of videos that are on the app state
                (basically we need to pass some data from the parent component into the child component
                (we do this approach defining property on the jsx tag.)) */}
                <VideoList videos={this.state.videos} /> {/* in here videos(in videoList tag) is a prop (passing props) | when prop arrives to functional component it's gonna be ultimately function's argument */}
             
            </div>); // This refer to jsx, jsx is a dialect of javascript that allows us to write what looks like html inside of our javascript 
    }
}
/* const App = () => { // const -> this is a final variable, it's not gonna change (actually constant)
//We turned functional component into class based component because we wanna keep track of the list of videos(because some amount of data that's going to change over time and we want it to persist throughout the application). 
} */

// Take this component's generated HTML and put it
// on the page (in the DOM)  [show it on the page]
ReactDOM.render(<App />, document.querySelector('.container')); // <App></App> whenever we have a tag with jsx that has nothing inside of it we can make it self-closing tag by adding a space and forward slash



 /* const App = function(){ 
    return <div>Hi!</div>; 

    By creating an App (component) we create a class of component(a type of component),
    We can have many different instances of App, and this is a class not an instance.  
  
    Consider function in here as a factory that produces instances of the actual components
    that get rendered to the DOM.
    
    SO we need to instantiate our components before we try to render to the DOM
 */

 /* ReactDOM.render(<App />);

 In here, we say to ReactDOM render <App /> component but we do not say 
 where to put DOM element on the page. And ReactDOM says us i don't know 
 where to put that component on the page. 

 To tell this we specify second argument and this is a reference to an existing DOM node on the page.
 Think of that like target container, and we say to ReactDOM render this App produce HTML and insert 
 that HTML into second argument(that exist in our HTML document, that mean we need an existing HTML node to render this)    

 */