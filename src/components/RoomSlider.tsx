import React, { useState, useEffect, useRef } from 'react';

interface ImageComparisonSliderProps {
  imgBefore: string;
  imgAfter: string;
}

const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({ imgBefore, imgAfter }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const [containerStyles] = useState<React.CSSProperties>({
    position: 'relative',
    width: '500px',
    overflow: 'hidden',
  });
  const [resizeStyles, setResizeStyles] = useState<React.CSSProperties>({
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '50%',
    overflow: 'hidden',
    transition: 'width 0.3s ease',
  });
  const [rangeInputStyles] = useState<React.CSSProperties>({
    position: 'absolute',
    display: 'block',
    width: '90%',
    margin: '0 5%',
    bottom: '7%'
  });
  const [imgAfterStyles, setImgAfterStyles] = useState<React.CSSProperties>({ width: '100%' });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setImgAfterStyles({ width: containerRef.current.offsetWidth });
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleRangeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const percent = `${event.target.value}%`;
    setResizeStyles((prevStyles) => ({ ...prevStyles, width: percent }));
  };

  return (
    <div className="comparison__container" ref={containerRef} style={containerStyles}>
      <img
        className="comparison__img-before"
        style={{ width: '100%' }}
        src={imgBefore}
        alt="Before"
      />
      <div className="comparison__resize" style={resizeStyles}>
        <img
          className="comparison__img-after"
          style={{ width: '100%', height: '100%' }}
          src={imgAfter}
          alt="After"
        />
      </div>
      <input
        className="comparison__range-input"
        ref={rangeRef}
        style={rangeInputStyles}
        type="range"
        min="0"
        max="100"
        step="1"
        onChange={handleRangeInputChange}
      />
    </div>
  );
};

export default ImageComparisonSlider;
