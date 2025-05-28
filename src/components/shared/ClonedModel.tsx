"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

export function ClonedModel() {
  const { scene, animations } = useGLTF("/model/DreoneFPV_TEX.gltf");
  const group = useRef<THREE.Group>(null);
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  const clonedScene = useMemo(() => {
    return SkeletonUtils.clone(scene) as THREE.Group;
  }, [scene]);

  useEffect(() => {
    if (animations && animations.length > 0 && group.current) {
      mixer.current = new THREE.AnimationMixer(group.current);
      animations.forEach(clip => {
        mixer.current?.clipAction(clip).play();
      });
    }
  }, [animations]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return (
    <group ref={group} scale={[25, 25, 25]} position={[0, 0, 0]}>
      <primitive object={clonedScene} />
    </group>
  );
}
