"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { ClonedModel } from "./ClonedModel";

// function Model() {
//   const { scene, animations } = useGLTF("/model/DreoneFPV_TEX.gltf");
//   const group = useRef<THREE.Group>(null);
//   const mixer = useRef<THREE.AnimationMixer | null>(null);

//   useEffect(() => {
//     if (animations && animations.length > 0 && group.current) {
//       mixer.current = new THREE.AnimationMixer(group.current);
//       animations.forEach(clip => {
//         mixer.current?.clipAction(clip).play();
//       });
//     }
//   }, [animations]);

//   useFrame((state, delta) => {
//     mixer.current?.update(delta);
//   });

//   return (
//     <group ref={group} scale={[25, 25, 25]} position={[0, 0, 0]}>
//       <primitive object={scene} />
//     </group>
//   );
// }

export default function ModelViewerFooter() {
  return (
    <div className=" w-full aspect-[208/130] z-10">
      <Canvas
        shadows
        camera={{ position: [0, 7, 10], fov: 50 }}
        className="w-full h-full"
      >
        <ambientLight intensity={1.2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          intensity={2}
          penumbra={1}
          castShadow
        />
        <hemisphereLight args={["#eeeeee", "#444444", 1]} />
        <Environment preset="sunset" environmentIntensity={0.2} />
        <Suspense fallback={null}>
          <ClonedModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
