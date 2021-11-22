
import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from './table/DataTable';
// import the js file, as we whant to be the 'startup' that will be renderd by the doom

// Creating a arrow function to return a greeting to test code will reder out.
/*const Greeting = () => {
  return <h1>Hello Coders!</h1>;
}*/

//ReactDOM.render(<Greeting />, document.getElementById('root'));
// Render the greeting function.
ReactDOM.render(<DataTable/>, document.getElementById('root'));



