import './App.css';
import SceneLayout from './components/SceneLayout';


function App() {
    return (
        <div className="app-container">
            <nav>
                Three.js / React / Demo
            </nav>

            <header>
                <h1 className="app-title fade-in-up">
                    Galería 3D Interactiva
                </h1>
                <p className="app-subtitle fade-in-up">
                    Explora geometrías y modelos en el espacio tridimensional
                </p>
            </header>

            <SceneLayout />
        </div>
    )
}

export default App;