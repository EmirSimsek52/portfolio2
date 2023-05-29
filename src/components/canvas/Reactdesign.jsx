import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Trail, Float, Line, Sphere, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

export default function Reactdesign() {
  return (
    <Canvas camera={{ position: [0, 0,8] }}>
     
      <Float speed={5} rotationIntensity={1} floatIntensity={2}>
        <Atom />
      </Float>
      <Stars count={400} />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={.2} radius={.4} />
      </EffectComposer>
    </Canvas>
  )
}

function Atom(props) {
  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
  return (
    <group {...props}>
      <Line worldUnits points={points} color="#0081C9" lineWidth={0.3} />
      <Line worldUnits points={points} color="#0081C9" lineWidth={0.3} rotation={[0, 0, 1]} />
      <Line worldUnits points={points} color="#0081C9" lineWidth={0.3} rotation={[0, 0, -1]} />
      <Electron position={[0, 0, 0.5]} speed={6} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[2, 20, 40]} toneMapped={false} />
      </Sphere>
    </group>
  )
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
  })
  return (
    <group {...props}>
      <Trail local width={5} length={6} color={new THREE.Color(3, 1, 10)} attenuation={(t) => t * t}>
        <mesh ref={ref}>
          <sphereGeometry args={[.3]} />
          <meshBasicMaterial color={[1, 1, 20]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  )
}