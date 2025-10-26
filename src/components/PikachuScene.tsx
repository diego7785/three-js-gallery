import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Pikachu() {
    const { scene, animations } = useGLTF('/models/pikachu.glb');
    const mixer = new THREE.AnimationMixer(scene);
    const action = mixer.clipAction(animations[1]);
    action.play();

    useFrame((_, delta) => {
        mixer.update(delta);
    })

    return <primitive object={scene} scale={7} position={[0, -5, 0]} />
}

function PikachuScene() {
    return (
        <Canvas
            style={{ height: 300, width: 300 }}
            camera={{ position: [0, 0, 14] }}
        >
            <ambientLight intensity={0.6} />
            <directionalLight position={[3,3,3]} intensity={1} />
            <Pikachu />
            <OrbitControls />
        </Canvas>
    )
}

export default PikachuScene;