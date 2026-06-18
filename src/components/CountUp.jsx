import { useEffect, useState, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function CountUp({ end, duration = 2, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);
  
  const numVal = typeof end === 'string' ? parseFloat(end.replace(/[^0-9.]/g, '')) : end;
  const isNumber = !isNaN(numVal);
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView && isNumber) {
      motionValue.set(numVal);
    }
  }, [isInView, motionValue, numVal, isNumber]);

  useEffect(() => {
    if (!isNumber) return;
    return springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue, isNumber]);

  if (!isNumber) return <span ref={ref}>{end}</span>;

  let actualSuffix = suffix;
  let actualPrefix = prefix;
  if (typeof end === 'string') {
    const match = end.match(/^([^0-9.-]*)([0-9.]+)(.*)$/);
    if (match) {
      if (!prefix) actualPrefix = match[1];
      if (!suffix) actualSuffix = match[3];
    }
  }

  return (
    <span ref={ref}>
      {actualPrefix}
      {displayValue}
      {actualSuffix}
    </span>
  );
}
