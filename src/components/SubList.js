import React from "react";

export default class SubList extends React.Component {
    constructor(props) {
        super(props);
    }
    onDragStart = (event,index)=>{
        event.dataTransfer.setData("id", index);
    }
    onDragOver = (event)=>{
        event.preventDefault();
    }
    onDragLeave = (event)=>{
        event.preventDefault();
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
    render(){
        let boxElement = <div id = "boxele"></div>
        if(this.props.name === "SB Alert Emergency Information"){
            boxElement = <div id = "boxele">
                <a href="#">SB Alert - Registration</a>
            </div>
        }
        if(this.props.name === "Security and Personal Data"){
            boxElement = <div id = "boxele">
                <a href="#">Change My Solar Password</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Addresses</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Names</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Phone Numbers</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Email Addresses</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Emergency Contacts</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">NetID Maintenance</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">User Preferences</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Whom to contact if I'm missing</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">7 More...</a>
            </div>
        }
        if(this.props.name === "Campus Personal Information"){
            boxElement = <div id = "boxele">
                <a href="#">Communication Preferences</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">FERPA Release/Suppress</a>
            </div>
        }
        if(this.props.name === "Elections"){
            boxElement = <div id = "boxele">
                <a href="#">Student Elections</a>
            </div>
        }
        if(this.props.name === "Student Records & Registration"){
            boxElement = <div id = "boxele">
                <a href="#">Enrollment/Degree Verification</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Academic Planning</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Enrollment</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Academic Records</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Degree Progress/Graduation</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Transfer Credit</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Excelsior Cert Summary</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Guide Mobile App</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">TAP Certification Summary</a>
            </div>
        }
        if(this.props.name === "Campus Financial Services"){
            boxElement = <div id = "boxele">
                <a href="#">Account Information/Payment</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Financial Aid</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">RequiredHealthInsurance/Waiver</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Set Billing Notification Email</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Pay Petitions</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Manage My Bank Accounts</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Enroll in Direct Deposit</a>
            </div>
        }
        if(this.props.name === "Student Employment Service"){
            boxElement = <div id = "boxele">
                <a href="#">Enter Timesheet</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Timesheet Paid</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Find My NYS Emplid</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">NYS Payroll Directions</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">NYS Payroll Online</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">View Paycheck</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Federal Work Study Balance</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Payroll Periods</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Student Employment Handbook</a>
            </div>
        }
        if(this.props.name === "Campus Housing"){
            boxElement = <div id = "boxele">
                <a href="#">Continuing Room Deposit</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Graduate / Family Apt. Deposit</a>
                <span class="ATEXT">, &nbsp;</span>
                <a href="#">Summer Room Payment</a>
            </div>
        }
        let backcolor = "#d3dce8"
        if(this.props.index % 2 == 1){
            backcolor = "#eaeff5";
        }
        //save old color, on mouse leave put old color back, use state
        return(
            <div
                onDragStart = {(event)=> {this.onDragStart(event, this.props.index)}}
                onDragOver = {(event)=>{this.onDragOver(event)}}
                onDrop = {(event)=>{this.onDrop(event, this.props.index)}}
                onDragLeave = {(event)=>{this.onDragLeave(event)}}
                draggable
                id= {this.props.index}
                key= {this.props.index}
                style = {{backgroundColor: backcolor}}
                class ="bigtitle">
                {this.props.name}
                {boxElement}
            </div>
        )
    }
}