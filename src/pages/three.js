import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PresentationControls, ContactShadows } from '@react-three/drei';

import Sphere from "../components/three_sphere.js";
import Model from "../components/three_model.js";
import FBOParticles from "../components/three_particles.js";

import "../style.css";


export default function Three() {
  return (
    <>
      <h1>Three</h1>
      <p>
        GLSL Shader in ReactThree, use the mouse to <b>drag</b> the distored sphere.<br />
        ReactThree seems interesting but writing shaders in it feels cluncky.<br />
      </p>

      <div className='canvasWrapper'>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <Sphere />
        </ Canvas>
      </div>

      <p>
        3D Objects can be imported via 'drei' as .gltf or .glb –<br />
        .fbx and .obj data may be loaded using 'three/examples/jsm/loaders'.
      </p>

      <div className='canvasWrapper'>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <PresentationControls
            config={{ mass: 6, tension: 1000 }}
            snap={{ mass: 2, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>

            <Model rotation={[0.1, 0.3, 0]} position={[0, 1.0, 0.0]} scale={2.0} />
          </PresentationControls>
          <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
          <Environment preset="sunset" />
        </Canvas>
      </div >

      <p>
        Also Particels are a thing in Three.js. This is based on a sample of <a href="https://blog.maximeheckel.com/posts/the-magical-world-of-particles-with-react-three-fiber-and-shaders/">Maxime Heckel Blog Post</a>.
        <br></br>
        Only tweaked some settings and created a single script for it. Tough, but interesting.
      </p >

      <div className='canvasWrapper'>
        <Canvas className="canvas" camera={{ position: [1.5, 1.0, 1.5] }} >
          <ambientLight intensity={0.5} />
          <OrbitControls enableZoom={false} />
          <FBOParticles />

        </Canvas>
      </div >
    </>
  );
}

