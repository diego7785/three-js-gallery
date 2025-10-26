import CubeScene from "./CubeScene";
import PikachuScene from "./PikachuScene";
import SphereScene from "./SphereScene";
import './SceneLayout.css';

interface SceneData {
    id: string;
    title: string;
    component: React.FC;
    description: string;
    tags: string[];
}

const sceneData: SceneData[] = [
    {
        id: 'sphere',
        title: 'Esfera',
        component: SphereScene,
        description: 'Una simple esfera 3D que puedes rotar e inspeccionar desde todos los ángulos.',
        tags: ['geometría básica', 'interactivo']
    },
    {
        id: 'cube',
        title: 'Cubo',
        component: CubeScene,
        description: 'Un cubo 3D que puedes rotar e inspeccionar desde todos los ángulos.',
        tags: ['geometría básica', 'interactivo']
    },
    {
        id: 'pikachu',
        title: 'Pikachu',
        component: PikachuScene,
        description: 'Un modelo 3D detallado de Pikachu que puedes rotar e inspeccionar desde todos los ángulos.',
        tags: ['modelo 3D', 'personaje', 'interactivo']
    }

]

function SceneLayout() {
    return (
        <main className="scene-layout">
            {sceneData.map(scene => {
                const SceneComponet = scene.component;
                return (
                    <section key={scene.id} className="scene-item">
                        <div className="scene-canvas">
                            <SceneComponet />
                        </div>

                        <div className="scene-content">
                            <h2 className="scene-title">{scene.title}</h2>
                            <p className="scene-description">{scene.description}</p>
                            <div className="scene-tags">
                                {scene.tags.map((tag, index) => (
                                    <span key={index} className="scene-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            })}
        </main>
    )
}

export default SceneLayout;