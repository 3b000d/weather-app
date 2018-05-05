import React from "react";

class Title extends React.Component {
    render () {
        return (
            <div className="box title-me" style={{margin : '0px'}}>
                <h1 className="title is-3">Weather Finder</h1>
                <p>Find out the Weather, temperature and more ..</p>
                <footer><p>designed &amp; Programmed with alot of &hearts; By Geek</p></footer>
            </div>
        );
    }
};

export default Title;