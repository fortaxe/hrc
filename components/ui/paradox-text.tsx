"use client"


import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap
} from 'framer-motion';

interface ParallaxProps {
  children: string;
  baseVelocity?: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  // Split the text to separate "2025" for special styling
  const textParts = children.split('2025');
  const mainText = textParts[0];
  const yearText = '2025';
  
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="parallax-container"
      style={{
        overflow: 'hidden',
        letterSpacing: '-2px',
        lineHeight: 0.8,
        margin: 0,
        whiteSpace: 'nowrap',
        display: 'flex',
        flexWrap: 'nowrap'
      }}
    >
      <motion.div
        className="parallax-scroller"
        style={{
          x,
          fontWeight: 400,
          textTransform: 'uppercase',
          fontSize: '64px',
          display: 'flex',
          whiteSpace: 'nowrap',
          flexWrap: 'nowrap',
          color: '#bcbcbc'
        }}
      >
        <span style={{ display: 'block', marginRight: '30px' }}>
          {mainText}<span style={{ color: '#E1251B' }}>{yearText}</span>{' '}
        </span>
        <span style={{ display: 'block', marginRight: '30px' }}>
          {mainText}<span style={{ color: '#E1251B' }}>{yearText}</span>{' '}
        </span>
        <span style={{ display: 'block', marginRight: '30px' }}>
          {mainText}<span style={{ color: '#E1251B' }}>{yearText}</span>{' '}
        </span>
        <span style={{ display: 'block', marginRight: '30px' }}>
          {mainText}<span style={{ color: '#E1251B' }}>{yearText}</span>{' '}
        </span>
      </motion.div>
    </div>
  );
}

export default ParallaxText;