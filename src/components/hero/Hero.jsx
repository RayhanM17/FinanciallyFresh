"use client"
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import Button from '../button/Button';

import Styles from './hero.module.sass'

const WaveDots = (props) => {
  const ref = useRef()

  
  const amplitude = 1.0;      // Amplitude of the sine wave
  const frequency = 1.0;      // Frequency of the sine wave (number of cycles within 2*pi)
  const numPoints = 300;    // Number of points to generate
  
  const sineWavePoints = new Float32Array(numPoints * 2);
  
  for (let i = 0; i < numPoints; i++) {
    const x = (i / (numPoints - 1)) * 4 * Math.PI - 2 * Math.PI; // X-coordinate within the -2π to 2π range
    const y = amplitude * Math.sin(frequency * x);  // Calculate y-coordinate using the sine function
    sineWavePoints[i * 2] = x;
    sineWavePoints[i * 2 + 1] = y;
  }



  useFrame((state, delta) => {
    // Update the positions of the points based on time (delta)
    for (let i = 0; i < numPoints; i++) {
      // Update the y-coordinate of each point based on a sine function and time
      const x = sineWavePoints[i * 2];
      const time = state.clock.getElapsedTime(); // Get elapsed time
      sineWavePoints[i * 2 + 1] = amplitude * Math.sin(frequency * x + time);
    }
  
  });

  return (
    <group>
      <Points ref={ref} positions={sineWavePoints} stride={2} frustumCulled {...props}>
        <PointMaterial
          color="#114B5F"
          size={0.02}
          sizeAttentuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
};

const Hero = () => {
  return (
    <div className={Styles.fullscreen}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <WaveDots />
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