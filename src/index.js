import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// THIS FUNCTION TESTS TO SEE IF THIS APP HAS
// DATA IN LOCAL STORAGE. IF IT DOES, TRUE IS
// RETURNED, ELSE FALSE 
function launch() {
  // IF NO DATA IS IN LOCAL STORAGE THEN LOAD ALL THE TEST
  // DATA FROM THE JSON FILE AND PUT IT THERE
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
launch();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();