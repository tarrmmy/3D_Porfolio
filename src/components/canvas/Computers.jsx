import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Preload, useGLTF } from "@react-three/drei";

import  Canvasloader  from '../Loader'

const Computers = () => {
    const computer = useGLTF ('./desktop_pc/scene.gltf')
    return (
    <mesh>
        <hemisphereLight 
            intensity={0.15}
            groundColor="black"
        />
        <pointLight intensity={1} />
        <primitive 
            object={computer.scene}
            scale={0.65}
            position={[0, -4.25, -1.55]}
            rotation={[-0.01, -0.2, -0.1]}
        />
    </mesh>
    )
}

const ComputersCanvas = () => {
    return (
        <Canvas 
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 23}}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Canvasloader />}>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers />
            </Suspense>

            <Preload all/>
        </Canvas>
    )
}

export default  ComputersCanvas;