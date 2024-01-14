import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three'
import islandScene from '../assets/3d/island.glb';

import * as THREE from 'three';
 


const Island = ({isRotating, setIsRotating,setCurrentStage, ...props}) =>  {
    const islandRef = useRef();

    const { gl, viewport} = useThree();
    const { nodes, materials, animations } = useGLTF(islandScene);
  
    const group = useRef();
    const { actions } = useAnimations(animations, group);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.8;

    const handlePointerDown = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(true);

      const clientX = e.touches
      ? e.touches[0].clientX 
      : e.clientX;

      lastX.current = clientX;
    };

    const handlePointerUp = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(false);
    };

    const handlePointerMove = (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (isRotating) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const delta = (clientX - lastX.current) / viewport.width;
    
        islandRef.current.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
    
        // Update quaternion rotation
        const euler = new THREE.Euler(0, islandRef.current.rotation.y, 0, 'XYZ');
        islandRef.current.quaternion.setFromEuler(euler);
      }
    };
    

 const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

    const handleKeyUp = (e) => {
      if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
        setIsRotating(false);
      }
    };


    useEffect(() => {
      const canvas = gl.domElement;
      canvas.addEventListener('pointerdown', handlePointerDown);
      canvas.addEventListener('pointerup', handlePointerUp);
      canvas.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return() => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointerup', handlePointerUp);
        canvas.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      }
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);
  

    useFrame(() => {
      // If not rotating, apply damping to slow down the rotation (smoothly)
      if (!isRotating) {
        // Apply damping factor
        rotationSpeed.current *= dampingFactor;
    
        // Stop rotation when speed is very small
        if (Math.abs(rotationSpeed.current) < 0.001) {
          rotationSpeed.current = 0;
        }
      } else {
        // When rotating, determine the current stage based on island's orientation
        const rotation = islandRef.current.rotation.y;
    
        // Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI]
        const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    
        // Set the current stage based on the island's orientation
        switch (true) {
          case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
            setCurrentStage(4);
            break;
          case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
            setCurrentStage(3);
            break;
          case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
            setCurrentStage(2);
            break;
          case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(null);
        }
      }
    });
    
    
    return (
    <a.group ref = {islandRef} {...props} >
      <mesh    
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );

}

export default Island
