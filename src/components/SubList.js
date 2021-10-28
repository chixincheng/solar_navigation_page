import React from "react";

export default class SubList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "linen",
        }
    }
    onDragStart = (event,index)=>{
        event.dataTransfer.setData("id", index);
    }
    onDragOver = (event)=>{
        event.preventDefault();
        this.setState(prevState => ({
            color:"var(--swatch-accent)"
        }), () => {
            //
        });
    }
    onDragLeave = (event)=>{
        event.preventDefault();
        this.setState(prevState => ({
            color:"linen"
        }), () => {
            //
        });
    }
    onDrop = (event,endindex) =>{
        let startindex = event.dataTransfer.getData("id");
        let templist = this.props.mainlist.name;
        let temp = this.props.mainlist.name[startindex];
        templist.splice(startindex, 1)
        templist.splice(endindex, 0, temp)
        this.setState(prevState => ({
            color: "linen"
        }), () => {
            //
        });
        this.props.droplist(templist);
    }
    onMouseOver = () =>{
        this.setState(prevState => ({
            color: "var(--swatch-accent)"
        }), () => {
            //
        });
    }
    onMouseLeave = () =>{
        this.setState(prevState => ({
            color: "linen"
        }), () => {
            //
        });
    }
    render(){
        return(
            <div
                onDragStart = {(event)=> {this.onDragStart(event, this.props.index)}}
                onDragOver = {(event)=>{this.onDragOver(event)}}
                onDrop = {(event)=>{this.onDrop(event, this.props.index)}}
                onDragLeave = {(event)=>{this.onDragLeave(event)}}
                draggable
                id= {this.props.index}
                key= {this.props.index}
                style = {{backgroundColor: this.state.color}}
                onMouseOver = {()=>{this.onMouseOver()}}
                onMouseLeave = {()=>{this.onMouseLeave()}}
                class ="bigtitle">
                {this.props.name}
            </div>
        )
    }
}