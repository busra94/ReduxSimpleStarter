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
    constructor(props) { // all javascript classes have constructor, and it is the first and only function called automatically whenever a new instance of the class created. It is reserved for doing some setup or initializing variables.
        super(props); // Component itself has its own constructor function. When we define that is already defined on the parent class which is Component, we can call that parent method on the parent class by calling super(). 

        this.state = { term: '' }; // only inside of the constructor function we can change state using 'this.state', except constructor function we instead of using this.setState = ... 
    }
    // render is a must method, others from Component are optional.
    render() { // if we do not return anything from render it's gonna give an error.
        return (
            
            <div>
                {/* here, input says to state with setState update the state you need to change the state(like someone tells his boss you need to change), now we want to make inverse this scenario(state will tell input what the current value should be. now we update input to gets its value from the state.) */}
                <input 
                value={this.state.term} // input value is provided by this.state.term and with this statement we turn input to a controlled component. So now input value only changes when the state changes
                onChange={ // when the onChange event handler runs the value of the input has not actually changed 
                    event => // if there is one argument we can drop parentheses
                    // this.setState causes the component to re-render and when it re-renders the value of the input is set to new value of the this.state.term  
                        this.setState( // with setState we inform react about state is changed. Whenever setState is called our component immediately re-runs
                            { term: event.target.value },                         
                            )
                                                     
                            
                        } 
                />               
                {/* Value of input: {this.state.term}  we are not modifying term we are just referencing it */}
            </div>
                               
        ); // onChange() is a react event                   
    }

}

// React components can show other components, so because of there is no connection between components we need explicitly declare a connection between them.
export default SearchBar; // now we can use searchbar from other components





/* const SearchBar = () => { 
    return <input />
}; // defining component, functional component */

/* Functional component did not have any ability to be aware of its state 
or have the ability to communicate with other components very effectively, 
because we want these abilities we use class component instead of function component      
*/

/*     // event handler 
    // convention: on/handle-NameoftheElementforWatchingAnEvent-NameoftheEvent
    onInputChange(event){ // an event object describes the context or information about the event that occurred.        
    }  
*/

/* if we wanna an initial value of the input element we can initialize it assign this.state.term to its value.|(not a placeholder(grayed out text.))  */