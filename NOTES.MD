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

### super()
https://stackoverflow.com/questions/31067368/how-to-extend-a-class-without-having-to-using-super-in-es6/31079103#31079103 : 

Section 9.2.2, [[Construct]], which defines the behavior of functions called via new or super. When calling a base class constructor, this is initialized at step #8 of [[Construct]], but for all other cases, this is uninitialized. At the end of construction, GetThisBinding is called, so if super has not been called yet (thus initializing this), or an explicit replacement object was not returned, the final line of the constructor call will throw an exception.

https://discuss.reactjs.org/t/should-we-include-the-props-parameter-to-class-constructors-when-declaring-components-using-es6-classes/2781

https://stackoverflow.com/questions/40433463/what-does-calling-super-in-a-react-constructor-do/40440322 :

The reason why this cannot be allowed before super() is because this is uninitialized if super() is not called. However even if we are not using this we need a super() inside a constructor because ES6 class constructors MUST call super if they are subclasses. Thus, you have to call super() as long as you have a constructor. (But a subclass does not have to have a constructor).

super() will calls the constructor of its parent class. This is required when you need to access some variables from the parent class.

### super() vs super(props)
https://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e

Note that passing or not passing props to super has no effect on later uses of this.props outside constructor. That is render, shouldComponentUpdate, or event handlers always have access to it.

https://medium.com/@etherealm/super-vs-super-props-in-react-class-components-58658af6ecf2 

Class components should always call the base constructor with props and ES6 Classes have to call super if they are subclasses.

### *Udemy course notes from Stephen Grider*
The core React library knows how to work with react components, knows how to render them 
how to nest them together, the functionality to actually render them to the dom, take a component 
and insert into the DOM is now a seperate library called react-dom. 
WE USE REACT_DOM LIBRARY FOR RENDERING A COMPONENT 


If we do not define React we cannot use it even if we have react library.
When we write es6 code which we are doing here, we have access to a concept called javascript modules.
Javascript modules encapsulates the idea that all the code we write in seperate files is siloed(isolated), seperated from other code that we write, 
IN OTHER LIBRARIES THAT WE INSTALL IN OUR PROJECT.

Code that is declared in other files that we produce will have zero contact with this file unless we explicitly say I want access to some code in other file over there. 
(Means react says I want access to App variable)
 

After we create that component we need to make sure that it gets out into the DOM. Components are not automatically get inserted to our html document. 
We have to specifically say to react. (with ReactDOM)  

JSX cannot be interpreted by the browser, webpack and babel is to translate JSX into vanilla(pure) javascript that can be understood by the browser.

The purpose of JSX is: 
JSX is produces the actual html that gets inserted to the DOM when we render this component.(render mean is put this components html onto the page)
So this jsx gets turned into html which in turn gets placed onto our page into our DOM, it's what the user ends up seeing.
So the purpose of JSX is to have some javascript code that can produce ultimately HTML.

### AND WHY WE USE JSX : 
We do not have to write JSX but behind of scene JSX is turned into vanilla javascript and it is really complicated.
When our components grow up it is getting really complex. 

 https://reactjs.org/docs/components-and-props.html : 
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation

#### props  
In class based component props are available anywhere in any method we define as this.prop 

#### 
Whenever we refactor our component from being functional component to class based component we need to update our references props to this.props

# Passing callbacks down from parent to child ARASTIR