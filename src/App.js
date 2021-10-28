import React from 'react';
import './App.css';

// IMPORT DATA MANAGEMENT AND TRANSACTION STUFF
import DBManager from './db/DBManager';
// THESE ARE OUR REACT COMPONENTS
import Banner from './components/Banner.js'
import Sidebar from './components/Sidebar.js'
import Statusbar from './components/Statusbar.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.db = new DBManager();
        let curlist = this.db.queryGetList("mainlist");
        console.log(curlist);
        this.state = {
            mainlist : curlist
        }
    }
    dropList = (list)=>{
        this.state.mainlist.name = list;
        this.setState(prevState =>({
            mainlist: this.state.mainlist
        }),() =>{
            this.db.mutationUpdateList(this.state.mainlist)
        })
    }
    render() {
        return (
            <div id="app-root">
                <Banner />
                <Sidebar
                    mainlist = {this.state.mainlist}
                    dropList = {this.dropList}
                />
                <Statusbar/>
            </div>
        );
    }
}

export default App;
