// searchbar
// user types something in searchbar and list updates based on 'something' so need to make an api request to the youtube api   

import React, { Component } from 'react'; // we need to import this because whenever we translate the jsx to normal javascript it turns into a call like 'React.createElement' // so we need to import react into all of our components that we write that have jsx. CURLY BRACES MEANS import react and pull off the property component as a variable called Component
// import { Component } from "react";
//const Component = React.Component; // same as we specify it in import statement.

/* A class component is used to whenever we want a component to have some type of internal record keeping,
some ability for to be aware of itself,
AND what's happened to it since it's been rendered 
because users are going to be typing into input, 
our component needs to have some ability to introspect(içgözlem) itself, 
some abilities like tell other parts of the application 
'hey user typed something into input'        
TO MAKE POSSIBLE THIS WE CAN USE CLASS COMPONENTS*/


 class SearchBar extends Component { // Give SearchBar class access to all of the functionality that React.Component has.
    // render is a must method, others from Component are optional.

    render(){ // if we do not return anything from render it's gonna give an error.
        return <input />;                        
    } 
 
    
         
}



/* const SearchBar = () => { 
    return <input />
}; // defining component, functional component */

/* Functional component did not have any ability to be aware of its state 
or have the ability to communicate with other components very effectively, 
because we want these abilities we use class component instead of function component      
*/

// React components can show other components, so because of there is no connection between components we need explicitly declare a connection between them.

export default SearchBar; // now we can use searchbar from other components