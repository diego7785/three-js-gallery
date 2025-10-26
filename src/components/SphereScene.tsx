import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Sphere() {
    return (
        <mesh>
            <sphereGeometry args={[1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    )
}

function SphereScene() {
    return (
        <Canvas style={{ height: 350, width: 350 }} camera={{position: [0, 0, 2]}}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[3,3,3]} intensity={1}/>
            <Sphere />
            <OrbitControls />
        </Canvas>
    )
}

export default SphereScene;