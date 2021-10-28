import React from 'react';
import './App.css';

// IMPORT DATA MANAGEMENT AND TRANSACTION STUFF
// THESE ARE OUR REACT COMPONENTS
import Banner from './components/Banner.js'
import Sidebar from './components/Sidebar.js'
import Statusbar from './components/Statusbar.js'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let mainlist = {
            name: ["Share My Information", "SB Alert Emergency Information", 
            "Security and Personal Data", "Campus Personal Information", "Elections", 
            "Student Records & Registration", "Campus Financial Services", 
            "Student Employment Service", "Campus Housing"]
        };
        return (
            <div id="app-root">
                <Banner />
                <Sidebar
                    mainlist = {mainlist}
                />
                <Statusbar/>
            </div>
        );
    }
}

export default App;
