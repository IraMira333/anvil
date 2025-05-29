"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { ClonedModel } from "./ClonedModel";

export default function ModelViewer() {
  return (
    <div className=" w-full aspect-[288/170] z-[5]">
      <Canvas
        shadows
        camera={{ position: [0, 4, 10], fov: 50 }}
        className="w-full h-full pointer-events-none"
        style={{ pointerEvents: "none" }}
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
        <Environment preset="sunset" environmentIntensity={0.15} />
        <Suspense fallback={null}>
          <ClonedModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
