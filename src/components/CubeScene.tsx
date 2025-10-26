import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Cube() {
    useFrame((state) => {
        state.scene.rotation.y += 0.01;
    })
    return (
        <mesh>
            <boxGeometry args={[1]} />
            <meshStandardMaterial color="skyblue" />
        </mesh>
    )
}

function CubeScene() {
    return (
        <Canvas style={{ height: 350, width: 350 }} camera={{position: [0, 0, 2]}}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[3,3,3]} intensity={1}/>
            <Cube />
            <OrbitControls />
        </Canvas>
    )
}

export default CubeScene;