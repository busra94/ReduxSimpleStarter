import React, { Component } from 'react'; /* go find the library 'react' installed in my application as dependency and assign it to the variable React [Core React Library]  */
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // we need to specify path because possible we have more than one search_bar.js file.   

const API_KEY = "AIzaSyD34FV1scycwDox7XEDX3JTXWR3SqHVGGk";

// Create a component. This component should produce 
// some HTML [Make component]
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] }; // videos -> property name of state, {} -> this is an empty object

        // to make sure the user see some videos immediately we move it into App component.
        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => { // data returns from function is list of videos.
            this.setState({videos}); // this came from es6 syntax, if key and value names are same we can use this syntax.
         //   this.setState({videos: videos}); // we assign videos to videos array.     
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
            </div>); // This refer to jsx, jsx is a dialect of javascrpt that allows us to write what looks like html inside of our javascript 
    }

}
/* const App = () => { // const -> this is a final variable, it's not gonna change (actually constant)
//We turned functional component into class based component because we wanna keep track of the list of videos(because some amount of data that's going to change over time and we want it to persist throughout the application). 
} */



// Take this component's generated HTML and put it
// on the page (in the DOM)  [show it on the page]
ReactDOM.render(<App />, document.querySelector('.container')); // <App></App> whenever we have a tag with jsx that has nothing inside of it we can make it self-closing tag by adding a space and forward slash



/* The core React library knows how to work with react components, knows how to render them 
how to nest them together, the functionality to actually render them to the dom, take a component 
and insert into the DOM is now a seperate library called react-dom. 
WE USE REACT_DOM LIBRARY FOR RENDERING A COMPONENT */



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

 /* If we do not define React we cannot use it even if we have react library.
When we write es6 code which we are doing here, 
we have access to a concept called javascript modules.
Javascript modules encapsulates the idea that all the code we write 
in seperate files is siloed(isolated), seperated from other code 
that we write, IN OTHER LIBRARIES THAT WE INSTALL IN OUR PROJECT.

Code that is declared in other files that we produce will have zero contact 
with this file unless we explicitly say I want access to some code in other file over there. 
 (Means react says I want access to App variable)
 */

/* After we create that component we need to make sure 
that it gets out into the DOM. Components are not 
automatically get inserted to our html document. 
We have to specifically say to react.  */

/* JSX cannot be interpreted by the browser, webpack and babel is to translate JSX into vanilla(pure) javascript 
that can be understood by the browser.

The purpose of JSX is: 
JSX is produces the actual html that gets inserted to the DOM 
when we render this component.(render mean is put this components html onto the page)
So this jsx gets turned into html which in turn gets placed onto our page into our DOM, 
it's what the user ends up seeing.
So the purpose of JSX is to have some javascript code that can produce ultimately HTML.

AND WHY WE USE JSX : 
We do not have to write JSX but behind of scene JSX is turned into vanilla javascript and it is really complicated.
When our components grow up it is getting really complex.  
*/

/* https://reactjs.org/docs/components-and-props.html : 
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation
 */

 /* Downwards data flow means the only most parent component in the application should be responsible for fetchig data. */