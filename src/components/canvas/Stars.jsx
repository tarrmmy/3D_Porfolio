import { Suspense, useState, useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Point, PointMaterial, Preload } from '@react-three/drei'


import *as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array (5000), {radius: 1.2})
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Point ref={ref} position={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial 
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Point>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='z-[-1] inset-0 absolute h-auto w-full'>
      <Canvas camera={{ position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
  )
}

export default StarsCanvas