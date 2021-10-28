import React from "react";

export default class Statusbar extends React.Component {
    render() {
        return (
            <nav id="statusbar">
                <div class="dropdown">
                    <button class="dropbtn">Favorites</button>
                    <div class="dropdown-content">
                        <a href="#">Class Search</a>
                        <a href="#">My Class Schedule</a>
                        <a href="#">Enrollment Dates</a>
                        <a href="#">To Do List</a>
                        <a href="#">View & Accept/Decline FinAid</a>
                        <a href="#">Add to Favorites</a>
                        <a href="#">Edit Favorites</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Main Menu</button>
                    <div class="dropdown-content">
                        <a href="#">SBU</a>
                        <a href="#">Quick Links</a>
                        <a href="#">Self Service</a>
                        <a href="#">Set Up SACR</a>
                        <a href="#">Reporting Tools</a>
                        <a href="#">PeopleTools</a>
                        <a href="#">Appsian</a>
                        <a href="#">PeopleUX</a>
                        <a href="#">Change My Password</a>
                        <a href="#">My Personalizations</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Action Center</button>
                    <div class="dropdown-content">
                        <a href="#">Holds</a>
                        <a href="#">To Do List</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Message Center</button>
                    <div class="dropdown-content">
                        <a href="#">New Message(s)</a>
                        <a href="#">Read Message(s)</a>
                    </div>
                </div>
            </nav>
        )
    }
}