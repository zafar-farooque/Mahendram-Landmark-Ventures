import { useRef, useState, useCallback } from 'react';

export default function TiltCard({ children, className = '', style = {}, maxTilt = 8, as: Component = 'div', ...props }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xNorm = (x / rect.width) * 2 - 1;
    const yNorm = (y / rect.height) * 2 - 1;
    
    setTilt({
      x: -yNorm * maxTilt,
      y: xNorm * maxTilt
    });
  }, [maxTilt]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Component
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.2s ease',
      }}
      {...props}
    >
      <div style={{ transform: isHovering ? 'translateZ(20px)' : 'translateZ(0)', transition: 'transform 0.2s ease', height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </Component>
  );
}
