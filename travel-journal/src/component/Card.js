import React from "react";
import reactLogo from "./images/earth-locator.png"




export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt={props.title} className="card--image"/>
            <div className="card-info">
               
                <div className="div">
                <img src={reactLogo} alt="icon" className="card--icon"/>
                    <span className="span--location">{props.location}</span>
                    <span className="span--link"><a href={props.googleMapUrl}>View on google map</a></span>
                </div>
                <h2>{props.title}</h2>
                <span className="span--date">{props.startDate} - {props.endDate}</span>
                <p className="card--text">{props.description}</p>
                
            </div>
        </div>
    )
}
