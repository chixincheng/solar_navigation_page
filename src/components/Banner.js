import React from "react";

export default class Banner extends React.Component {
    render() {
        return (
            <header id="banner" role = "banner">
                <div id="solarlogo"></div>
                <div id="links">
                    <button
                        id="headerbutton">
                        Sign Out
                    </button>
                    <button
                        id="headerbutton">
                            Add to Favorites
                    </button>
                    <button
                        id="headerbutton">
                            Home
                    </button>
                </div>
            </header>
        );
    }
}