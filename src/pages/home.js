import "../style.css";
import { useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useAnimations, useScroll, useGLTF, Environment } from "@react-three/drei";
import model from "../static/suzanne.gltf";

/*
  * Based on example by drei lib - kinda messy tbh...
  * https://github.com/pmndrs/drei
  * */

function Composition({ ...props }) {
  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll()
  const { scene, nodes, animations } = useGLTF(model)
  const { actions } = useAnimations(animations, scene)
  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
  // useEffect(() => void (actions['Take 001'].play().paused = true), [actions])
  useFrame((state, delta) => {
    // Model can contain actions
    // const action = actions['Take 001']
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - scroll.offset
    // action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
    state.camera.position.set(
      Math.sin(offset) * 15,
      Math.sin(offset) * 5,
      -10)
    state.camera.lookAt(0, 0, 0)
  })
  return <primitive object={scene} {...props} />
}


export default function Home() {
  return (
    <>
      <h1>React Playground</h1>

      <p>
        Little react playground - three.js seems to be pretty nice.<br></br>
        There is quiet some potential - but it's quiet different from what I'm used to.
      </p>

      <iframe className="video"
        width="720" height="480" src="https://www.youtube.com/embed/kn5n3cDNM0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>

      <p>
        While many ppl on YT recommend 'Framer' for UX & UI I'm not sure it's needed.<br></br>
        It's powerful, but doesn't seem very useful when it comes to 3D.
      </p>

      <div className="canvasWrapper">
        <Canvas>
          <ScrollControls pages={1} damping={1.0}>
            <Composition scale={5.0} position={[0, 0.25, 0]} rotation={[0.0, Math.PI, 0.0]} />
          </ScrollControls>
          <Environment preset="city" />
        </Canvas>
      </div >

      <p>
        Lets see how stuff goes along in Vue & Angular.<br></br>
        So far React seems to be quiet nice to to react-three.
      </p>
    </>
  );
}

useGLTF.preload(model)

