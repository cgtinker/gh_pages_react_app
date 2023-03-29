import { useState } from "react";
import "../style.css";


export default function Home() {
    const [youtubeID] = useState('J5_rBMLCv24')
    return <div>
        <h1>Home</h1>
        <iframe className='video'
            title='Youtube player'
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
        </iframe>
    </div>
}