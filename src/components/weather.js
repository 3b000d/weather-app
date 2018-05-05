import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.city && 
                    this.props.country && 
                    this.props.temperature && 
                    this.props.humidity && 
                    this.props.description && 

                    <div className="message is-primary">
                        { 
                            this.props.city && 
                            this.props.country && 
                            this.props.temperature && 
                            this.props.humidity && 
                            this.props.description && 
                            <div className="message-header">The weather</div>
                        }

                        { 
                            this.props.city && 
                            this.props.country && 
                            this.props.temperature && 
                            this.props.humidity && 
                            this.props.description && 
                            <div className="message-body">   
                                <p>Location : {this.props.country} , {this.props.city}</p> 
                                <p>Temperature : {this.props.temperature}</p>
                                <p>Humidity : {this.props.humidity}</p> 
                                <p>Description : {this.props.description}</p>
                            </div>
                        }

                    </div>
                }

                {
                    this.props.error &&
                    <div className= "message is-danger">
                        <div className="message-header">Error</div>
                        <div className="message-body">Error : {this.props.error}</div>
                    </div>
                }
            </div>
        );
    }
};

export default Weather;