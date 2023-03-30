import { useState } from "react";
import "../style.css";
import Card from  "../components/card.js";


export default function Home() {
    const [cards, setCards] = useState(["A", "B", "C"]);

    return <div>
        <h1>Playing with Cards</h1>
        <div className="cardContainer">
        <Card 
        ></Card>
        </div>
        </div>
}
