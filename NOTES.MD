## Notes about React
### boilerplate code

For instance, a lawyer may give you a five page contract to sign, but most of the contract is boilerplate?—?meaning it’s the same for everyone who gets that contract, with only a few lines changed here and there.

In computer programming, boilerplate code or boilerplate refers to sections of code that have to be included in many places with little or no alteration

### From stephen grider course

Javascript files(React, redux..) that are written in es6(slightly different syntax of javascript). We cannot run it(code that is written in es6) on the browser, we have to first go through a tooling or transpiling step(we are going to use a tool called webpack and it's backed by babeljs library) and then our code can be ran into the browser,
after webpack and babel get through it's gonna spit out a single file called application.js or main.js more accurately whatever.js, in this our all that saple code is in there and now it can be ran safely inside of a browser.       

React is a javascript library that is used to produce html that is shown to user in a web browser. When we write react code we are writing individual components or views. Components are snippets of code that produce html. SO whenever you think component or view think  something that produces html. A component is acollection of Javascript functions that produce html, so when we are making component we are writing javascript, but it's ultimately produce html.     


### state vs props
https://github.com/uberVU/react-guide/blob/master/props-vs-state.md : 
The main responsibility of a Component is to translate raw data into rich HTML. With that in mind, the props and the state together constitute the raw data that the HTML output derives from.
tl;dr: If a Component needs to alter one of its attributes at some point in time, that attribute should be part of its state, otherwise it should just be a prop for that Component.
### Common ground
Before separating props and state, let's also identify where they overlap.
•	Both props and state are plain JS objects
•	Both props and state changes trigger a render update
•	Both props and state are deterministic. If your Component generates different outputs for the same combination of propsand state then you're doing something wrong.
Props and state are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).
https://reactjs.org/docs/faq-state.html :
In React, both this.props and this.state represent the rendered values, i.e. what’s currently on the screen.
Calls to setState are asynchronous - don’t rely on this.state to reflect the new value immediately after calling setState. Pass an updater function instead of an object if you need to compute values based on the current state (see below for details).

https://lucybain.com/blog/2016/react-state-vs-pros/  :
First off, notice that setState takes a function, that’s because setState can run asynchronously. It needs to take a callback function rather than updating the state directly.
https://thinkster.io/tutorials/understanding-react-state : state yararlı kaynak örnek var!
### State from stephen grider course 
State is a plain javascript object that is used to record and react to user events. Each class based component that we define has its own state object. Whenever a component state is changed the component immediately re-renders, and also forces all of its children to render as well. So whenever state is changed render method will re-run. And if we have other components also they will be re-rendered. Before we ever use state inside of a component we need to initialize the state object. We initialize state object inside constructor() method. 
### Controlled components 
https://reactjs.org/docs/forms.html :
JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.
The React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

### Unidirectional Data Flow (Downwards Data Flow) 
https://medium.com/@lizdenhup/understanding-unidirectional-data-flow-in-react-3e3524c09d8e:
 A unidirectional data flow means that when designing a React app you often nest child components within higher-order parent components. 
### Downwards data flow from Stephen Grider course 
Downwards data flow means the only most parent component in the application should be responsible for fetchig data.    
