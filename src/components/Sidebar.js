import React from "react";
import SubList from "./SubList";

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {mainlist,dropList} = this.props;
        return (
            <div class="mainpage">
                <div class="mainpage-list">
                    {
                        mainlist.name.map((name,index)=>{
                            return(
                            <SubList
                                name = {name}
                                index = {index}
                                key = {index+name}
                                mainlist = {mainlist}
                                droplist = {dropList}
                            />);
                        })
                    }
                </div>
            </div>
        );
    }
}