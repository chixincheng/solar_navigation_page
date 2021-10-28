import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
if(localStorage.getItem("mainlist") == null){
  localStorage.setItem("mainlist", JSON.stringify(
  {
    "name": ["Share My Information", "SB Alert Emergency Information", 
                "Security and Personal Data", "Campus Personal Information", "Elections", 
                "Student Records & Registration", "Campus Financial Services", 
                "Student Employment Service", "Campus Housing"]
  }));
}
launch();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();