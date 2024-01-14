import React from 'react'
import { useRef, useEffect } from 'react';
import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


const Bird = ({ isRotating, ...props }) => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (actions && actions['Take 001']) {
      actions['Take 001'].play();
    }
  }, [actions]);

  useFrame(({ clock, camera }) => {
    if (!birdRef.current) return; // Skip if birdRef.current is not defined yet

    // Update the Y position simulate the flight of a sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;


    //check if the bird reached an endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // change the direction to forward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      //change direction to forward and reset the bird's rotation 
      birdRef.current.rotation.y = 0;
    }

    // updating z and x position based on directions
    if (birdRef.current.rotation.y === 0) {
      // moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // moving backwards
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });


    return (
      <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
        <primitive object= {scene}/>
    </mesh>
  );
};

export default Bird;

