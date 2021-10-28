import React from "react";
import SubList from "./SubList";

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        const {mainlist} = this.props;
        this.state = {
            mainlist : mainlist
        }
    }
    dropList = (list)=>{
        this.state.mainlist.name = list;
        this.setState(prevState =>({
            mainlist: this.state.mainlist
        }))
    }
    render() {
        return (
            <div class="mainpage">
                <div class="mainpage-list">
                    {
                        this.state.mainlist.name.map((name,index)=>{
                            return(
                            <SubList
                                name = {name}
                                index = {index}
                                key = {index+name}
                                mainlist = {this.state.mainlist}
                                droplist = {this.dropList}
                            />);
                        })
                    }
                </div>
            </div>
        );
    }
}