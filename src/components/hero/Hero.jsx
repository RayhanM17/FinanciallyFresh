"use client"
import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import Button from '../button/Button';

import Styles from './hero.module.sass'
import useWindowDimensions from '../../hooks/useWindowDimensions';


const WaveDots = ({numPoints, frequency, amplitude}) => {

  const ref = useRef()
  
  const wavePoints = new Float32Array(numPoints * 2);
  
  for (let i = 0; i < numPoints; i++) {
    const x = Math.sin(i) * 3; // domain of the function
    const y = amplitude * Math.sin(frequency * i);  // Calculate y-coordinate using the sine function

    wavePoints[i*2] = x;
    wavePoints[i*2 + 1] = y;
  }

  useFrame((state, delta) => {

    // Update the positions of the points based on time (delta)
    for (let i = 0; i < numPoints; i++) {
      // Update the y-coordinate of each point based on a sine function and time
      const x = wavePoints[i*2]
      const time = state.clock.getElapsedTime(); // Get elapsed time
      wavePoints[i*2 + 1] = amplitude * Math.sin(frequency * x + time);

    }
  
  });

  return (
    <group>
      <Points ref={ref} positions={wavePoints} stride={2} frustumCulled>
        <PointMaterial
          color="#114B5F"
          size={0.01}
          sizeAttentuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
};

const Hero = () => {
  const {width, height} = useWindowDimensions()

  const [amplitude, setAmplitude ]= useState(1)
  const [frequency, setFrequency] = useState(1);

  const handleMouseMove = (event) => {
    // Example: Adjust frequency based on mouse X position
    const newFrequency = event.clientX / width * 5; // Adjust the multiplier as needed
    setFrequency(newFrequency);
    const newAmplitude = 1 - event.clientY / height * 1.20
    setAmplitude(newAmplitude);
  };

  return (

      <div className={Styles.fullscreen} onMouseMove={handleMouseMove}>
        <Canvas camera={{position: [0, 0, 1.35], fov: 75}}>
          <Suspense fallback={null}>
            <WaveDots 
              amplitude={amplitude}
              frequency={frequency} 
              numPoints={(Math.floor(width/2) % 2 == 0) ? Math.floor(width/2) + 1 : Math.floor(width/2)}
            />
          </Suspense>
        </Canvas>
        <div className={Styles.absolutecenter}>
          <div className={Styles.container}>
            <h1>Achieve financial Freedom</h1>
            <h3 className='pt-20 pb-20'>Explore through our website and learn how to manage your finances</h3>
            <Button isAlt href='#' icon="ARROW_RIGHT">
              Read mores
            </Button>
          </div>
        </div>
      </div>
  );
};

export default Hero;