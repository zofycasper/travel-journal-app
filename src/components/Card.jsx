import React from "react";
import fuji from "../image/fuji.png";
import location from "../image/location.png";

export default function Card() {
    return (
        <div className="card">
            <img className="card-cover" src={fuji} alt="fuji" />
            <div className="card-content">
                <div className="card-location">
                    <img src={location} alt="location" />
                    <h3>Japan</h3>
                    <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">
                        View on Google Maps
                    </a>
                </div>
                <h1 className="card-title">Mount Fuji</h1>
                <p className="card-date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card-detail">
                    Mount Fuji is the tallest mountain in Japan, standing at
                    3,776 meters (12,380 feet). Mount Fuji is the single most
                    popular tourist site in Japan, for both Japanese and foreign
                    tourists.
                </p>
            </div>
        </div>
    );
}
