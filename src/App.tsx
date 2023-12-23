import { Canvas } from '@react-three/fiber';
import './App.css';
import { Human } from './components/Human';
import { OrbitControls, PerspectiveCamera, ContactShadows, Environment } from '@react-three/drei';
import { Sidebar } from './components/Sidebar';


function ThreeScene() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <PerspectiveCamera makeDefault position={[1, 1, 5]} fov={30} />
      <OrbitControls />
      <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.5} width={10} height={10} blur={1} far={0.8} />
      <Environment preset="city" background blur={0.8} />
      <group position={[0, -1, 0.8]} >
        <Human rotation={[20,4,2]}/>
      </group>
    </Canvas>
  );
}

function App() {
  return (
    <div className="App h-full">
      {/* <Sidebar/> */}
      <ThreeScene/>
    </div>
  );
}

export default App;
