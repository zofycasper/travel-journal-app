import React from "react";
import Card from "./Card";
import data from "../data";

export default function Main() {
    const cards = data.map((item, index) => {
        return <Card key={index} item={item} order={index} />;
    });

    console.log(cards);

    return <div className="main">{cards}</div>;
}
