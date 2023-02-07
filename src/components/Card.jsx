import React from "react";
import fuji from "../image/fuji.png";
import location from "../image/location.png";

export default function Card(props) {
    // if (props.item.index === 0) {
    //     style={{

    //         borderTop: "none" }}
    // }

    return (
        <div
            className="card"
            style={
                props.order === 0
                    ? { borderTop: "none" }
                    : { borderTop: "1px solid #f5f5f5" }
            }
        >
            <img className="card-cover" src={props.item.imageUrl} alt="fuji" />
            <div className="card-content">
                <div className="card-location">
                    <img src={location} alt="location" />
                    <h3>{props.item.location.toUpperCase()}</h3>
                    <a href={`${props.item.googleMapsUrl}`}>
                        View on Google Maps
                    </a>
                </div>
                <h1 className="card-title">{props.item.title}</h1>
                <p className="card-date">
                    {props.item.startDate} - {props.item.endDate}
                </p>
                <p className="card-detail">{props.item.description}</p>
            </div>
        </div>
    );
}
