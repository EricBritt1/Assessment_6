### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Asynchronous code in JavaScript can be managed by the keyword await. This allows us to await the response of any asynchronous code before anything is performed on that response. 
Another way aynchronous code in JavaScript can be managed is by using try and catch. Inside of the async function you try getting a response from a url and accessing data but, if the promise isn't properly fulfilled or there's a status code error then another action can be performed in catch.
(I know it says some but, this is all I got)


- What is a Promise?
A promise is a object always sent with an async function no matter what. It is a one time gurantee of a future value. A promise can be pending, resolved or rejected.



- What are the differences between an async function and a regular function?
A regular function executes line by line whether or not all operations are are completed or not.
An async function always returns promises. It's main focal point is if it has to wait for a certain operation to be completed it'll execute the rest of the code and come back. 


- What is the difference between Node.js and Express.js?
Node.js is a javascript environment that runs server-side. Express.js is a npm package that takes the server-side javascript environment and turns it into an interactive visible representation on localhost. Flask to python is what Express is to Node.js.

- What is the error-first callback pattern?
I am not sure what the error-first callback pattern is. I had to look this one up because I forgot. An example in our course would be this: 
if(condition isn't met) {
  express error (called here)
}
next(e)
The callback function's first parameter is listed as error. Node will supply an error object(if something bad happened), otherwise null as arguments.


- What is middleware?
Middleware is what runs in middle of request and response cycles. ExpressErrors is one example that runs in the middle of a request. Express.json is another example as well though I will have to read up on what it does exactly. I believe it takes the response and jsonifies it. 
Kwame: I'd like to gain a better understanding of middleware

- What does the `next` function do?
Next is a function we can call the third parameter which tells express to move on to the next matching route after the callback.
Note for Kwame: I'd like to get a better understanding for the keyword next.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)


```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt];
}
```
Response: 
In my eyes I don't see anything wrong with the following code as it does work. Perhaps just await all promises at once by using promise.all. Also jquery script must be included in html somewhere.