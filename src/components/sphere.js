import React, { useRef } from "react";
import glsl from "babel-plugin-glsl/macro";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";


const DisplacementShaderMaterial = shaderMaterial(
    // uniform
    {
        uTime: 0,
        uObjectColor: new THREE.Color(1.0, 0.3, 0.3),
        uLightPos: new THREE.Vector3(0.0, 2.0, 5.0),
        uLightColor: new THREE.Color(0.3, 0.3, 1.0),
    },
    // vertexshader
    glsl`
        precision mediump float;
        uniform float uTime;

        varying vec3 vnorm;
        varying vec2 vuv;
        varying vec3 vpos;
        varying vec3 vcameraPos;

        #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

        void main() {
            vuv = uv;
            vpos = position;
            vnorm = normal;
            vcameraPos = cameraPosition;

            float noiseFreq = 0.25;
            float noiseAmp = 0.75;
            vec3 noisePos = vec3(
                vpos.x * 0.2 + uTime, 
                vpos.y,
                vpos.z);

            vec3 mpos = vec3(
                vpos.x + uTime,
                vpos.y + uTime,
                vpos.z + uTime);
            vpos += snoise3(mpos*noiseFreq)* noiseAmp * vpos;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(vpos, 1.0);;
        }
    `,
    // fragmentshader
    glsl`
        precision mediump float;
        uniform float uTime;
        uniform vec3 uObjectColor;
        uniform vec3 uLightPos;
        uniform vec3 uLightColor;

        varying vec3 vpos;
        varying vec2 vuv;
        varying vec3 vnorm;

        void main() {
            // ambient lightning
            vec3 ambient = 0.8 * uLightColor;
            
            // diffuse lightning
            vec3 normal = normalize(vnorm);
            vec3 lightDir = normalize(uLightPos - vpos);
            float diff = max(dot(normal, lightDir), 0.0);
            vec3 diffuse = diff * uLightColor*2.0;
            
            
            vec3 res = (ambient + diffuse) * vpos;
            gl_FragColor = vec4(res, 1.0);
        }
    `,
);

extend({ DisplacementShaderMaterial });

export default function Sphere() {
    const ref = useRef();
    
    useFrame(({clock}) => (ref.current.uTime = clock.getElapsedTime()));
    return (
        <mesh rotation={[0, 0, 0]}>
            <sphereBufferGeometry attach="geometry" args={[1.5, 32, 32]} / >
            <displacementShaderMaterial ref = {ref}  / >
        </mesh>
    );
}
