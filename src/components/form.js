import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="Enter ur City" className="input" />
                <input type="text" name="country" placeholder="Enter ur Country" className="input" />
                <button className="button is-primary">Get the Weather</button>
            </form>
        );
    }
};

export default Form;