import { useGLTF } from "@react-three/drei";
import p from "../static/suzanne.gltf";

function LoadModel(props) {
  const { scene } = useGLTF(p);
  return <primitive object={scene} {...props} />
}

export default function Model(props) {
  return (
    <LoadModel {...props} />
  );
}
