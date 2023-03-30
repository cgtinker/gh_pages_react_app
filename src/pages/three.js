import { Canvas } from '@react-three/fiber';
import Sphere from "../components/sphere.js";
import "../styles/three.css";


export default function Three() {
    return (
        <div className='canvasWrapper'>
        <h1>About</h1>
        <p>Not a whole lot to say.
        Three seems interesting but cluncky.</p>
        <Canvas className="canvas">
            <Sphere />
        </Canvas>
        </div>
    );
}

