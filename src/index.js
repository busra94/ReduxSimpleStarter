import React from 'react'; // go find the library 'react' instaled in my application as dependency and assign it to the variable React   

// Create a component. This component should produce 
// some HTML [Make component]
const App = function(){ // const -> this is a final variable, it's not gonna change (actually constant)
    return <div>Hi!</div>; // This refer to jsx, jsx is a dialect of javascrpt that allows us to write what looks like html inside of our javascript 
}
// Take this component's generated HTML and put it
// on the page (in the DOM)  [show it on the page]
 React.render(App);

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

/* JSX cannot be interpreted by the browser, webpack and babel is to translate JSX into vanilla(pure) javascript that can be understood by the browser.
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
 